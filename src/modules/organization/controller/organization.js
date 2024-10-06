import organizationModel from "../../../../DB/model/Organization.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getAllOrganization = asyncHandler(async (req, res, next) => {

    const organizations = await organizationModel.find()

    return res.status(200).json({ message: 'succuss', organizations })
})
