import teamModel from "../../../../DB/model/Teams.model.js";
import cloudinary from "../../../utils/cloudinary.js";
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getAllTeam = asyncHandler(async (req, res, next) => {

    const team = await teamModel.find()

    return res.status(200).json({ message: 'succuss', team })
})

export const addTeam = asyncHandler(async (req, res, next) => {
    try {
        // Check if a file has been uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'Payment screenshot is required' });
        }

        // Validate that teamName is not null or empty
        if (!req.body.teamName || req.body.teamName.trim() === '') {
            return res.status(400).json({ message: 'Team name is required' });
        }

        // Check for existing team by name or email
        const existingTeam = await teamModel.findOne({
            $or: [
                { teamName: req.body.teamName },
                { email: req.body.email }
            ]
        });
        if (existingTeam) {
            return res.status(400).json({ message: 'Team name or email already exists' });
        }

        // Upload payment screenshot to Cloudinary
        const cloud = await cloudinary.uploader.upload(req.file.path, { folder: 'backend/paymentScreenshot' }).catch(err => {
            return res.status(500).json({ message: 'Error uploading file to Cloudinary', error: err.message });
        });

        // Set the payment screenshot URL in the request body
        req.body.paymentScreenshot = cloud.secure_url;

        // Create new team
        const team = await teamModel.create({ ...req.body });

        // Return success response
        return res.status(201).json({ message: "success", team });
    } catch (error) {
        // Log error and send generic error message
        console.error('Error adding team:', error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});



