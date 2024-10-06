import { Router } from "express";
import * as userController from "./controller/user.js";
const router = Router()

router.get('/', userController.getAllUsers)


export default router