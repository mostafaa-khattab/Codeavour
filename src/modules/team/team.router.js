import { Router } from "express";
import * as teamController from "./controller/team.js";
import { validation } from "../../middleware/validation.js";
import * as validators from './team.validation.js';
import uploadCloud, { fileVaildation } from "../../utils/multer.js";

const router = Router()

router.get('/', teamController.getAllTeam)

// team
router.post('/add',
    uploadCloud({ fileType: fileVaildation.image, format: "Image" }).single("paymentScreenShot"),
    validation(validators.teamValidationSchema),
    teamController.addTeam)


export default router