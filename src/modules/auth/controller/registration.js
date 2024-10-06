import userModel from "../../../../DB/model/User.model.js"
import { generateToken, verifyToken } from "../../../utils/GenerateAndVerifyToken.js";
import { comparePassword, hash } from "../../../utils/HashAndCompare.js";
import { asyncHandler } from "../../../utils/errorHandling.js";
import bcrypt from 'bcrypt'
import organizationModel from "../../../../DB/model/Organization.model.js";
import { confirmEmailStyle, sendCodeStyle } from "../../../../emails/MessageStyle/message.style.js";
import sendEmail from "../../../../emails/user.email.js";
import cron from 'node-cron'
import cloudinary from "../../../utils/cloudinary.js";

export const signupUser = asyncHandler(async (req, res, next) => {

    const { username, password, role } = req.body

    if (await userModel.findOne({ username: username })) {
        return next(new Error("username exist", { cause: 409 }));
    }

    // hash password
    const hashPassword = hash({ plaintext: password })

    // save
    const user = await userModel.create({ username, role, password: hashPassword })

    await user.save()

    return res.status(201).json({ message: "success", user })

})

export const loginUser = asyncHandler(async (req, res, next) => {

    const { username, password } = req.body

    const user = await userModel.findOne({ username: username })
    if (!user) {
        return next(new Error("username not exist", { cause: 404 }));
    }

    if (!comparePassword({ plaintext: password, hashValue: user.password })) {
        return next(new Error("In-valid login date", { cause: 400 }));
    }

    await user.save()

    return res.status(201).json({ message: "success", user })

})

export const signupOrganization = asyncHandler(async (req, res, next) => {

    if (await organizationModel.findOne({ email: req.body.email.toLowerCase() })) {
        return next(new Error("Email is exist", { cause: 409 }));
    }

    if (await organizationModel.findOne({ userName: req.body.userName })) {
        return next(new Error("Username is exist", { cause: 409 }));
    }

    const cloud = await cloudinary.uploader.upload(req.file.path, { folder: 'backend/organizationLogo' });
    req.body.organizationLogo = cloud.secure_url;

    const hashPassword = await hash({ plaintext: req.body.password });

    const organization = await organizationModel.create({
        ...req.body,
        password: hashPassword,
    });

    // '*/2 * * * *', ==> after 2 minutes
    cron.schedule('0 */48 * * *', async () => {
        const token = generateToken({
            payload: {
                id: organization._id,
                organizationName: req.body.organizationName,
                email: req.body.email,
                userName: req.body.userName
            },
            signature: process.env.EMAIL_TOKEN,
            expiresIn: 60 * 5
        });

        let link = `${req.protocol}://${req.headers.host}/auth/confirmAccountOrganization/${token}`;
        const subject = 'Confirm Email 👋';
        const message = confirmEmailStyle(link);

        const emailSent = await sendEmail(req.body.email, subject, message);

        if (!emailSent) {
            console.error("Email could not be sent after 48 hours.");
        } else {
            // console.log(`Confirmation email sent to ${req.body.email}`);
        }
    }, {
        scheduled: true,
        timezone: "UTC"
    });


    return res.status(201).json({
        message: "Signup successful. Confirmation email will be sent in 48 hours.",
        organization
    });
});


export const confirmAccountOrganization = asyncHandler(async (req, res, next) => {

    const { token } = req.params
    const { email } = verifyToken({ token, signature: process.env.EMAIL_TOKEN })
    if (!email) {
        return next(new Error(`In-valid token payload`, { cause: 400 }))
    }
    const user = await organizationModel.updateOne({ email: email.toLowerCase() }, { emailConfirm: true })
    if (!user.matchedCount) {
        return res.status(404).send(`<h1>Not register account.</h1>`)
    } else {
        return res.status(404).redirect(`https://couponesta.com/`)
    }
})

export const loginOrganization = asyncHandler(async (req, res, next) => {
    const { emailOrUsername, password } = req.body;

    const organization = await organizationModel.findOne({
        $or: [
            { email: emailOrUsername },
            { userName: emailOrUsername }
        ]
    });

    if (!organization) {
        return next(new Error("Email or Username does not exist", { cause: 404 }));
    }

    if (!organization.emailConfirm) {
        return next(new Error("Account not verified or cannot log in", { cause: 403 }));
    }

    if (!comparePassword({ plaintext: password, hashValue: organization.password })) {
        return next(new Error("Invalid login credentials", { cause: 400 }));
    }

    const token = generateToken({
        payload: {
            id: organization._id,
            organizationName: organization.organizationName,
            email: organization.email,
            userName: organization.userName
        }
    });

    return res.status(200).json({ message: "success", organization, token });
});


// parent
export const signupParent = asyncHandler(async (req, res, next) => {

    const parent = await parentModel.create({ ...req.body });

    return res.status(201).json({ message: "success", parent });
});


// sendCode
export const sendCode = asyncHandler(async (req, res, next) => {

    const { emailOrUsername } = req.body;

    let organization = await organizationModel.findOne({
        $or: [
            { email: emailOrUsername },
            { userName: emailOrUsername }
        ]
    });

    if (!organization) {
        return next(new Error("Email or Username does not exist", { cause: 404 }));
    }

    if (!organization.emailConfirm) {
        return next(new Error("Account not verified or cannot log in", { cause: 403 }));
    }


    const code = Math.floor(Math.random() * 900000) + 100000

    organization = await organizationModel.findOneAndUpdate({ email: organization.email }, { code }, { new: true })

    let message = sendCodeStyle(code, organization.userName)
    let subject = 'forget password ✍️'

    sendEmail(organization.email, subject, message)

    // expire code after 2 minutes
    setTimeout(async () => {

        await organizationModel.updateOne({ email: organization.email }, { code: null })

    }, 2 * 60000)

    organization && res.status(202).json({ message: " success" })

})


// forgot password
export const forgetPassword = asyncHandler(async (req, res, next) => {

    const { emailOrUsername, code, password } = req.body

    let organization = await organizationModel.findOne({
        $or: [
            { email: emailOrUsername },
            { userName: emailOrUsername }
        ]
    });

    if (!organization) {
        return next(new Error("Email or Username does not exist", { cause: 404 }));
    }

    if (!organization.emailConfirm) {
        return next(new Error("Account not verified or cannot log in", { cause: 403 }));
    }

    if (code != organization?.code || organization.code == null || code == null) return next(new Error("In-valid Code", { cause: 404 }))

    if (bcrypt.compareSync(req.body.password, organization.password)) return next(new Error("Please ensure that your new password is different from your old password for security reasons", { cause: 404 }))
    organization = await organizationModel.findOneAndUpdate({
        $or: [
            { email: emailOrUsername },
            { userName: emailOrUsername }
        ]
    }, { password, code: null }, { new: true })

    organization && res.status(202).json({ message: " success", organization })

})
