import mongoose, { Schema, model } from 'mongoose';

const parentSchema = new Schema({
    parentName: {
        type: String,
        required: [true, 'Parent name is required'],
        trim: true,
    },
    studentName: {
        type: String,
        required: [true, 'Student name is required'],
        trim: true
    },
    studentAge: {
        type: Number,
        required: [true, 'Student age is required']
    },
    studentEmail: {
        type: String,
        required: [true, 'Student email is required'],
        trim: true,
        lower: true,
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    governorate: {
        type: String,
        required: [true, 'Governorate is required'],
        trim: true
    },
    is_studying_programming_robotic: {
        type: Boolean,
        required: [true, 'This field is required'],
        default: false
    },
    academyName: {
        type: String,
        required: [true, 'Academy name is required'],
        trim: true
    },
    wants_contact_academy: {
        type: Boolean,
        required: [true, 'This field is required'],
        default: false
    },
    preferred_studying_type: {
        type: String,
        enum: ['online', 'offline'],
        required: [true, 'Preferred studying type is required']
    },
    comments: {
        type: String,
        trim: true,
        default: ''
    },
}, {
    timestamps: true
});

const parentModel = model('Parent', parentSchema)

export default parentModel



