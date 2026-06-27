import User from "../database/modals/user_modal.js";

// SIGN IN API
export const register_api = async (req, res) => {
  console.log("➡️ Register API hit");

  try {
    const { role, email, password } = req.body;

    // Check if user already exists
    const exist = await User.findOne({ email: email }).exec();

    if (exist) {
      console.log("User already exists");
      return res
        .status(208)
        .json({ msg: "User already exists", success: false });
    }

    // Create new user
    const newUser = new User({ role, email, password });

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
    const { profilePic, firstName, lastName, phone, dob, gender } = profileData;
    // Update object matching your schema nested 'info' fields:
    const update = {
      "info.profilePic": profilePic,
      "info.firstName": firstName,
      "info.lastName": lastName,
      "info.phone": phone,
      "info.dob": dob,
      "info.gender": gender,
    };

    // Remove undefined fields to prevent overwriting keys with undefined:
    Object.keys(update).forEach(
      (key) => update[key] === undefined && delete update[key],
    );

    const updatedProfile = await User.findByIdAndUpdate(
      userId,
      { $set: update, $max: { onboardingStep: 2 } },
      { new: true },
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

// Address API
export const address_api = async (req, res) => {
  console.log("➡️ Address API hit");

  try {
    const userId = req.params.id;
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({
        msg: "No address data provided",
        success: false,
      });
    }

    const update = {
      "address.zipcode": data.zipcode,
      "address.house": data.house,
      "address.street": data.street,
      "address.area": data.area,
      "address.landmark": data.landmark,
      "address.state": data.state,
      "address.city": data.city,
    };

    // remove undefined fields
    Object.keys(update).forEach(
      (key) => update[key] === undefined && delete update[key],
    );

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: update, $max: { onboardingStep: 3 } },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      msg: "Address saved successfully",
      success: true,
      data: user.address,
    });
  } catch (error) {
    console.error("Address error:", error);
    return res.status(500).json({
      msg: "Failed to save address",
      success: false,
    });
  }
};
// Bank Details API
export const bankDetails_api = async (req, res) => {
  console.log("➡️ Bank Details API hit");

  try {
    const userId = req.params.id;
    const data = req.body;

    const update = {
      "bankDetails.accountHolderName": data.accountHolderName,
      "bankDetails.accountNumber": data.accountNumber,
      "bankDetails.bank": data.bank,
      // "bankDetails.bankDocument": data.bankDocument,
      "bankDetails.ifsc": data.ifsc,
    };

    // remove undefined fields
    Object.keys(update).forEach(
      (key) => update[key] === undefined && delete update[key],
    );

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: update, $max: { onboardingStep: 4 } },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      msg: "Bank details saved successfully",
      success: true,
      data: user.bankDetails,
    });
  } catch (error) {
    console.error("Bank details error:", error);
    return res.status(500).json({
      msg: "Failed to save bank details",
      success: false,
    });
  }
};

// Docuument API
export const document_api = async (req, res) => {
  console.log("➡️ Document API hit");

  try {
    const userId = req.params.id;
    const data = req.body;

    const update = {
      "documents.aadharCard": data.aadharCard,
      "documents.panCard": data.panCard,
      "documents.fssai": data.fssai,
      "documents.gst": data.gst,
    };

    // remove undefined fields
    Object.keys(update).forEach(
      (key) => update[key] === undefined && delete update[key],
    );

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: update, $max: { onboardingStep: 5 } },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      msg: "Document saved successfully",
      success: true,
      data: user.documents,
    });
  } catch (error) {
    console.error("Document error:", error);
    return res.status(500).json({
      msg: "Failed to save document",
      success: false,
    });
  }
};

// Security API
export const securityQuestions_api = async (req, res) => {
  console.log("➡️ Security Questions API hit");

  try {
    const userId = req.params.id;
    const data = req.body;

    // Map questionId → question (as per schema)
    const formatted = data.map((item) => ({
      question: item.questionId,
      answer: item.answer,
    }));

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: { securityQuestions: formatted }, $max: { onboardingStep: 6 } },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
        success: false,
      });
    }

    return res.status(200).json({
      msg: "Security questions saved successfully",
      success: true,
      data: user.securityQuestions,
    });
  } catch (error) {
    console.error("Security question error:", error);
    return res.status(500).json({
      msg: "Failed to save security questions",
      success: false,
    });
  }
};

export const login_api = async (req, res) => {
  console.log("➡️ Login API hit");
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(404).json({
        msg: "User not found",
        success: false,
      });
    }

    const isMatch = password === user.password;
    if (!isMatch) {
      return res.status(401).json({
        msg: "Invalid credentials",
        success: false,
      });
    }

    
    // Check account is active
    if (!user.isActive) {
      return res.status(403).json({
        msg: "Account is deactivated. Please contact support",
        success: false,
      });
    }

    return res.status(200).json({
      msg: "Login successful",
      success: true,
      user,
    });
  } catch (error) {
    console.error("❌ Login Error:", error);
    return res.status(500).json({
      msg: "Internal server error",
      success: false,
    });
  }
};
