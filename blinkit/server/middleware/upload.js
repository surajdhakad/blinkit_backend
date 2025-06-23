// server/middleware/upload.js
import multer from 'multer';

const storage = multer.memoryStorage(); // Stores image in memory (for Cloudinary)
const upload = multer({ storage });

export default upload;
