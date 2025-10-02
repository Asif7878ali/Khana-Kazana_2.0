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

  try {
    const userId = req.params.id;
    const profileData = req.body;
    console.log(userId);

    if (!profileData || Object.keys(profileData).length === 0) {
      return res
        .status(400)
        .json({ msg: "No profile data provided", success: false });
    }
    console.log(profileData);
    const { profilePic, firstName, lastName, phoneNumber, dob, gender } =
      profileData;
    // Update object matching your schema nested 'info' fields:
    const update = {
      "info.profilePic": profilePic,
      "info.firstName": firstName,
      "info.lastName": lastName,
      "info.phone": phoneNumber,
      "info.dob": dob,
      "info.gender": gender,
    };

    // Remove undefined fields to prevent overwriting keys with undefined:
    Object.keys(update).forEach(
      (key) => update[key] === undefined && delete update[key]
    );

    const options = { new: true }; // Return the updated document

    const updatedProfile = await Users.findOneAndUpdate(
      { _id: userId }, // Mongoose casts string to ObjectId automatically
      {
        $set: update,
        $inc: { onboardingStep: 1 },
      },
      options
    );  
   console.log(updatedProfile);
    if (!updatedProfile) {
      return res.status(404).json({ msg: "User not found", success: false });
    }

    return res.status(200).json({
      msg: "Profile Saved Successfully",
      success: true,
    });
  } catch (error) {
    console.error("Profile update error:", error);
    return res.status(500).json({
      msg: "Failed to update profile",
      success: false,
    });
  }
};
