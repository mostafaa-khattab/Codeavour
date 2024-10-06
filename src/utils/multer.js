import multer from 'multer'

export const fileVaildation = {
    image: ["image/png", "image/jpg", "image/jpeg", "image/gif"],
    
}

function uploadCloud({ fileType, format }) {

    const storage = multer.diskStorage({})

    function fileFilter(req, file, cb) {
        if (fileType.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error(`Can upload ${format} only.`, 401), false)
        }
    }

    const fileUpload = multer({ storage, fileFilter })

    return fileUpload
}

export default uploadCloud
