import { Router } from "express";
import * as organizationController from "./controller/organization.js";
const router = Router()

router.get('/', organizationController.getAllOrganization)


export default router