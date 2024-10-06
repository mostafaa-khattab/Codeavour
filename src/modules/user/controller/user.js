import userModel from "../../../../DB/model/User.model.js"
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getAllUsers = asyncHandler(async (req, res, next) => {

    const users = await userModel.find()

    return res.status(200).json({ message: 'succuss', users })
})
