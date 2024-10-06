import nodemailer from 'nodemailer'

const sendEmail = async (email, subject, message) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SenderEmail || "workteach83@gmail.com",
            pass: process.env.SenderPassword || "mwpz tgqj gkte qxoe"
        }
    })

    const info = await transporter.sendMail({
        from: `Codeavour <${process.env.SenderEmail}> `,
        to: email,
        subject: subject,
        html: message
    })

}

export default sendEmail;