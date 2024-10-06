import mongoose, { Schema, model } from "mongoose";


const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: [true, 'user name must be unique'],
    },
    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        default: 'organization',
        enum: ['organization', 'Parent'],
        required: true,
    },

}, {
    timestamps: true
})


const userModel = mongoose.model.User || model('User', userSchema)
export default userModel