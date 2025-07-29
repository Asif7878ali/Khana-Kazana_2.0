import Users from "../modal/schemas/UserSchema.js";

// SIGN IN API
export const register_api = async (req, res) => {
  console.log("➡️ Register API hit");

  try {
    const { role, email, password } = req.body;

    // Check if user already exists
    const exist = await Users.findOne({ email: email }).exec();

    if (exist) {
      console.log("User already exists");
      return res
        .status(208)
        .json({ msg: "User already exists", success: false });
    }

    // Create new user
    const newUser = new Users({ role, email, password });

    const user = await newUser.save();

    if (user) {
      console.log("✅ User registration successful");
      return res.status(201).json({
        msg: "User registration successful",
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
        success: true,
      });
    } else {
      console.log("⚠️ Failed to save user");
      return res
        .status(502)
        .json({ msg: "Failed to register user", success: false });
    }
  } catch (error) {
    console.error("❌ Registration Error:", error);
    return res
      .status(500)
      .json({ msg: "Internal server error", success: false });
  }
};


//PROFILE SETUP API
export const profile_api = async (req, res) => {
  console.log("➡️ Profile API hit");

   return res
        .status(502)
        .json({ msg: "Failed to register user", success: false });
    

};
