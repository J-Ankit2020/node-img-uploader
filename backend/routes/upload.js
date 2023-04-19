import express from 'express';
import multer from 'multer';
import path from 'path';
import ErrorHandler from '../middlewares/error.js';
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      cb(new ErrorHandler('Only Image Uploads Allowed', 406));
    } else cb(null, true);
  },
});

// upload
router.post('/upload', upload.single('image-file'), async (req, res) => {
  if (req.file) {
    const { filename, originalname } = req.file;
    console.log(req.file);

    res.status(201).json({
      messgae: 'Image uploaded successfully',
      success: true,
      image: {
        originalname,
        filename,
      },
    });
  } else throw new Error('Upload Failed', 500);
});

// get Image

export default router;
