import Users from "../modal/schemas/UserSchema.js";

export const register = async (req, res) => {
  console.log("➡️ Register API hit");

  try {
    const { role, email, password } = req.body;

    // Check if user already exists
    const exist = await Users.findOne({ email: email }).exec();

    if (exist) {
      return res.status(208).json({ msg: "User already exists" });
    }

    // Create new user
    const newUser = new Users({ role, email, password });

    const savedUser = await newUser.save();

    if (savedUser) {
      console.log("✅ User registration successful");
      return res.status(201).json({ msg: "User registration successful" });
    } else {
      console.log("⚠️ Failed to save user");
      return res.status(502).json({ msg: "Failed to register user" });
    }
  } catch (error) {
    console.error("❌ Registration Error:", error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};
