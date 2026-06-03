// Allowed file types
const allowed = ["image/jpeg", "image/png", "image/jpg"];

// check file size
export const maxImageSize = 5 * 1024 * 1024;

//check file types
export const imageFilter = (req, file, cb) => {
   if (allowed.includes(file.mimetype)) {
      cb(null , true);
   } else {
       cb(new Error("Only .jpg, .jpeg, and .png files are allowed"), false)
   }
};
