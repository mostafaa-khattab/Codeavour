import teamModel from "../../../../DB/model/Teams.model.js";
import cloudinary from "../../../utils/cloudinary.js";
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getAllTeam = asyncHandler(async (req, res, next) => {

    const team = await teamModel.find()

    return res.status(200).json({ message: 'succuss', team })
})

export const addTeam = asyncHandler(async (req, res, next) => {

    const existingTeam = await teamModel.findOne({ $or: [{ teamName: req.body.teamName }, { email: req.body.email }] });
    if (existingTeam) {
        return res.status(400).json({ message: 'Team name or email already exists' });
    }

    const cloud = await cloudinary.uploader.upload(req.file.path, { folder: 'backend/paymentScreenshot' });
    req.body.paymentScreenshot = cloud.secure_url;

    const team = await teamModel.create({ ...req.body });

    return res.status(201).json({ message: "success", team });
})