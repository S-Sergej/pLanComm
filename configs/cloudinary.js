const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
//require ("dotenv").config()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'avatars', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png', 'gif'],
  filename: function (req, file, cb) {
    cb(null, file); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadAvatarCloud = multer({ storage: storage });

module.exports = uploadAvatarCloud;