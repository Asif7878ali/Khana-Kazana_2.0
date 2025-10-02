// upload user profile pic
export const upload_user_image_api = (req, res) => {
    console.log("➡️ user profile pic api");
  try {
    if (!req.file) {
      console.log("No file uploaded or invalid file type");
      return res.status(400).json({
        success: false,
        message: "No file uploaded or invalid file type",
      });
    }

    const url = `${req.protocol}://${req.get("host")}/uploads/users/${
      req.file.filename
    }`;
     console.log("Image uploaded successfully");
    res.status(201).json({
      success: true,
      message: "Image uploaded successfully",
      url: url,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
