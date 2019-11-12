import multer from 'multer';
import uuid from 'uuid/v4';

import path from "path";

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req,file,cb) => {
        console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
});

export default multer({storage});