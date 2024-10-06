// import mongoose, { Schema, Types, model } from "mongoose";
import { Schema, model } from "mongoose";

const organizationSchema = new Schema({
    organizationName: {
        type: String,
        required: [true, 'Organization name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        trim: true,
        lower: true
    },
    governorate: {
        type: String,
        required: [true, 'Governorate is required'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        trim: true
    },
    adminName: {
        type: String,
        required: [true, 'Admin name is required'],
        trim: true
    },
    adminJob: {
        type: String,
        required: [true, 'Admin job title is required'],
        trim: true
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    userName: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: [true, 'Username must be unique']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true
    },
    organizationLogo: {
        type: String,
        required: [true, 'organization logo is required']
    },
    typeOfOrganization: {
        type: String,
        enum: ["school", "academy"],
        required: true,
        default: "school"
    },
    schoolName: {
        type: String,
        trim: true
    },
    academyName: {
        type: String,
        trim: true
    },
    socialMediaLinks: {
        type: String,
        trim: true,
        required: [true, 'social media links is required']
    },
    comment: {
        type: String,
        trim: true,
        default: ''
    },
    emailConfirm: {
        type: Boolean,
        default: false
    },
    code: { type: String, default: '' },

}, {
    timestamps: true
});

const organizationModel = model('Organization', organizationSchema)

export default organizationModel