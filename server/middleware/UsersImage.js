import multer from 'multer';
import path from "path";
import fs from "fs";
import { imageFilter, maxImageSize } from './ImageValidation.js';


// Folder path
const folder = "uploads/users";

//ensure folder exists
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder,
        { recursive : true}
    );
}

//Multer storage configuration
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, folder);
    },
  
   filename : (req, file, cb) => {
       const ext = path.extname(file.originalname); // ex .png
       const nameOriginalFile = path.basename(file.originalname , ext) // filename
       .replace(/\s+/g, "_")  //replace with _
       .replace(/[^\w\-]/g, ""); // remove special charector

       const uniqueSuffux = Date.now() + "-" + Math.round(Math.random() * 1e9);
       const filename = `${file.fieldname}-${nameOriginalFile}-${uniqueSuffux}${ext}`;
       cb(null , filename);
   } 
});

export const UserImageUpload = multer({
    storage,
    limits : {
        fileSize : maxImageSize
    },
    fileFilter : imageFilter
});
