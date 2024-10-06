import mongoose, { Schema, model } from "mongoose";

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: [true, 'Team name is required'],
        trim: true,
        unique: [true, 'Team name must be unique'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        trim: true,
        lower: true
    },
    track: {
        type: String,
        required: [true, 'Track is required'],
        trim: true
    },
    teamNumber: {
        type: Number,
        required: [true, 'Team number is required']
    },

    is_there_lecturer: {
        type: Boolean,
        required: [true, 'This field is required'],
        default: false
    },
    lecturerName: {
        type: String,
        trim: true
    },
    students: [{
        student_name: {
            type: String,
            required: [true, 'Student name is required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lower: true
        },
        phone_number: {
            type: String,
            required: [true, 'Phone number is required']
        },
        date_of_birth: {
            type: Date,
            required: [true, 'Date of birth is required'],
        }
    }],

    paymentScreenshot: {
        type: String,
        required: [true, 'Payment screenshot is required']
    },

    comment: {
        type: String,
        trim: true
    },

}, {
    timestamps: true,
});

const teamModel = model('Team', teamSchema)

export default teamModel
