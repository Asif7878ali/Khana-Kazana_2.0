import User from "../database/modals/user_modal.js";

export const get_profile_api = async (req, res) => {
    console.log("➡️ Get Profile API hit");
  try {

    const _id = req._id;
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      msg: "Profile fetched successfully",
      success: true,
      user,
    });
    
  } catch (error) {
    return res.status(500).json({
      msg: "Internal Server Error",
      success: false,
    });
  }
}