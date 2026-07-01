import Admin from "../database/modals/admin_modal.js";
import JWT from "jsonwebtoken";

export const admin_login_api = async (req, res) => {
  console.log("➡️ Admin Login API hit");
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select("+password").exec();
    if (!admin) {
      return res.status(404).json({
        msg: "Invalid Credentials",
        success: false,
      });
    }

    const isMatch = password === admin.password;
    if (!isMatch) {
      return res.status(401).json({
        msg: "Invalid Credentials",
        success: false,
      });
    }

    // Check account is active
    if (!admin.isActive) {
      return res.status(403).json({
        msg: "Account is deactivated. Please contact support",
        success: false,
      });
    }

    const token = await JWT.sign({ id: admin._id }, process.env.JWTSECRET, {
      expiresIn: "1d",
    });

    return res.cookie("token", token, { httpOnly: true }).status(200).json({
      msg: "Admin Login Successfully",
      success: true,
    });
  } catch (error) {
    console.error("❌ Admin Login Error:", error);
    return res.status(500).json({
      msg: "Internal server error",
      success: false,
    });
  }
};

export const admin_register_api = async (req, res) => {
  console.log("➡️ Admin Register API hit");

  try {
    const _id = req._id;
    const user = await Admin.findById(_id);

    if (!user) {
      return res.status(404).json({
        msg: "Admin not found",
        success: false,
      });
    }

    const { name, email, password, profilePic, role, permissions } = req.body;

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(409).json({
        msg: "Admin already exists with this email",
        success: false,
      });
    }
  } catch (error) {}
};
