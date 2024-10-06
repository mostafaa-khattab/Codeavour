import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv'
dotenv.config()



cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || 'dlbm6rfwr',
    api_key: process.env.API_KEY || "943537947635499",
    api_secret: process.env.API_SECRET || "xnMTTsWfrJnnQPe8SJ7BD-dtASc",
    // secure: true
});

export default cloudinary