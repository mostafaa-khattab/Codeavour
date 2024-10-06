import parentModel from "../../../../DB/model/Parent.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getAllParent = asyncHandler(async (req, res, next) => {

    const parents = await parentModel.find()

    return res.status(200).json({ message: 'succuss', parents })
})
