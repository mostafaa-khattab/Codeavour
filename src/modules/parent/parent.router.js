import { Router } from "express";
import * as parentController from "./controller/parent.js";
const router = Router()

router.get('/', parentController.getAllParent)


export default router