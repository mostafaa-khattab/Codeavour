import { Router } from "express";
import * as authController from './controller/registration.js'
import { validation } from "../../middleware/validation.js";
import * as validators from './auth.validation.js';
import uploadCloud, { fileVaildation } from "../../utils/multer.js";

const router = Router()

router.post('/signupUser',
    validation(validators.signUpUser),
    authController.signupUser)

router.post('/loginUser',
    validation(validators.loginUser),
    authController.loginUser)

// organization
router.post('/signupOrganization',
    uploadCloud({ fileType: fileVaildation.image, format: "Image" }).single("organizationLogo"),
    validation(validators.signUpOrganizationSchema),
    authController.signupOrganization)

router.post('/loginOrganization',
    validation(validators.loginOrganizationSchema),
    authController.loginOrganization)

router.get('/confirmAccountOrganization/:token',
    validation(validators.confirmAccountValidation),
    authController.confirmAccountOrganization)


// parent
router.post('/signupParent',
    validation(validators.signUpParentSchema),
    authController.signupParent)


router.post('/requestCode', validation(validators.sendCodeValidation), authController.sendCode)
router.post('/forgetPassword', validation(validators.forgetPasswordValidation), authController.forgetPassword)



export default router