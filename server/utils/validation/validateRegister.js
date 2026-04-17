export const validateRegister = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    console.log("Request body is missing");
    return res
      .status(400)
      .json({ msg: "Request body is missing", success: false });
  }

  const { role, email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Role validation
  if (!role) {
    console.log("Role is required");
    return res.status(400).json({ msg: "Role is required.", success: false });
  }

  // Email validation
  if (!email) {
    console.log("Email is required");
    return res.status(400).json({ msg: "Email is required.", success: false });
  } else if (!emailRegex.test(email)) {
    console.log("Please enter a valid email");
    return res
      .status(400)
      .json({ msg: "Please enter a valid email.", success: false });
  }

  // Password validation
  if (!password) {
    console.log("Password is required");
    return res
      .status(400)
      .json({ msg: "Password is required.", success: false });
  } else if (password.length < 6) {
    console.log("Password must be at least 6 characters");
    return res
      .status(400)
      .json({ msg: "Password must be at least 6 characters.", success: false });
  }

  next();
};

export const validateProfile = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    console.log("Request body is missing");
    return res
      .status(400)
      .json({ msg: "Request body is missing", success: false });
  }

  const { profilePic, firstName, lastName, phoneNumber, dob, gender } =
    req.body;
  console.log(req.body);

  // Profile Image validation
  if (!profilePic) {
    console.log("Image is required");
    return res.status(400).json({ msg: "Image is required.", success: false });
  }

  // First Name validation
  if (!firstName) {
    console.log("First Name is required");
    return res
      .status(400)
      .json({ msg: "First Name is required.", success: false });
  } else if (typeof firstName !== "string") {
    console.log("First Name is not Valid");
    return res
      .status(400)
      .json({ msg: "First Name is not Valid", success: false });
  }

  // Last Name validation
  if (!lastName) {
    console.log("Last Name is required");
    return res
      .status(400)
      .json({ msg: "Last Name is required.", success: false });
  } else if (typeof lastName !== "string") {
    console.log("Last Name is not Valid");
    return res
      .status(400)
      .json({ msg: "Last Name is not Valid", success: false });
  }

  // Mobile Number validation
  if (!phoneNumber) {
    console.log("Mobile Number is required");
    return res
      .status(400)
      .json({ msg: "Mobile Number is required.", success: false });
  } else if (typeof phoneNumber !== "string" || !/^\d{10}$/.test(phoneNumber)) {
    console.log("Mobile Number must be exactly 10 digits");
    return res.status(400).json({
      msg: "Mobile Number must be exactly 10 digits and contain only numbers",
      success: false,
    });
  }

  // Date of Birth validation
  if (!dob) {
    console.log("Date of Birth is required");
    return res
      .status(400)
      .json({ msg: "Date of Birth is required.", success: false });
  } else if (typeof dob !== "string" || isNaN(new Date(dob).getTime())) {
    console.log("Date of Birth is not valid");
    return res.status(400).json({
      msg: "Date of Birth is not valid",
      success: false,
    });
  }

  // Gender validation
  if (!gender) {
    console.log("Gender is required");
    return res.status(400).json({ msg: "Gender is required.", success: false });
  } else if (typeof gender !== "string") {
    console.log("Gender is not Valid");
    return res.status(400).json({ msg: "Gender is not Valid", success: false });
  }

  next();
};

export const validateAddress = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    console.log("Request body is missing");
    return res.status(400).json({
      msg: "Request body is missing",
      success: false,
    });
  }

  const { zip, house, street, area, landmark, state, city } = req.body;

  console.log(req.body);

  // ZIP Code validation
  if (!zip) {
    console.log("Zipcode is required");
    return res.status(400).json({
      msg: "Zipcode is required.",
      success: false,
    });
  } else if (typeof zip !== "string" || !/^\d{6}$/.test(zip)) {
    console.log("Invalid Zipcode");
    return res.status(400).json({
      msg: "Zipcode must be exactly 6 digits",
      success: false,
    });
  }

  // House validation
  if (!house) {
    console.log("House is required");
    return res.status(400).json({
      msg: "House is required.",
      success: false,
    });
  } else if (typeof house !== "string") {
    console.log("House is not valid");
    return res.status(400).json({
      msg: "House is not valid",
      success: false,
    });
  }

  // Street validation
  if (!street) {
    console.log("Street is required");
    return res.status(400).json({
      msg: "Street is required.",
      success: false,
    });
  } else if (typeof street !== "string") {
    console.log("Street is not valid");
    return res.status(400).json({
      msg: "Street is not valid",
      success: false,
    });
  }

  // Area validation
  if (!area) {
    console.log("Area is required");
    return res.status(400).json({
      msg: "Area is required.",
      success: false,
    });
  } else if (typeof area !== "string") {
    console.log("Area is not valid");
    return res.status(400).json({
      msg: "Area is not valid",
      success: false,
    });
  }

  // Landmark validation (optional)
  if (landmark && typeof landmark !== "string") {
    console.log("Landmark is not valid");
    return res.status(400).json({
      msg: "Landmark is not valid",
      success: false,
    });
  }

  // State validation
  if (!state) {
    console.log("State is required");
    return res.status(400).json({
      msg: "State is required.",
      success: false,
    });
  } else if (typeof state !== "string") {
    console.log("State is not valid");
    return res.status(400).json({
      msg: "State is not valid",
      success: false,
    });
  }

  // City validation
  if (!city) {
    console.log("City is required");
    return res.status(400).json({
      msg: "City is required.",
      success: false,
    });
  } else if (typeof city !== "string") {
    console.log("City is not valid");
    return res.status(400).json({
      msg: "City is not valid",
      success: false,
    });
  }

  next();
};

export const validateBankDetails = (req, res, next) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      msg: "Request body is missing",
      success: false,
    });
  }

  const { acountHolderName, accountNumber, bank, ifsc } = req.body;

  // Account Holder Name
  if (!acountHolderName) {
    return res.status(400).json({
      msg: "Account Holder Name is required",
      success: false,
    });
  }

  if (typeof acountHolderName !== "string") {
    return res.status(400).json({
      msg: "Invalid Account Holder Name",
      success: false,
    });
  }

  // Account Number
  if (!accountNumber) {
    return res.status(400).json({
      msg: "Account Number is required",
      success: false,
    });
  }

  if (!/^\d{9,18}$/.test(accountNumber)) {
    return res.status(400).json({
      msg: "Account Number must be 9–18 digits",
      success: false,
    });
  }

  // Bank Name
  if (!bank) {
    return res.status(400).json({
      msg: "Bank is required",
      success: false,
    });
  }

  // IFSC Code (India)
  if (!ifsc) {
    return res.status(400).json({
      msg: "IFSC code is required",
      success: false,
    });
  }

  if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifsc)) {
    return res.status(400).json({
      msg: "Invalid IFSC code",
      success: false,
    });
  }

  next();
};

export const validateSecurityQuestions = (req, res, next) => {
  const data = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      msg: "Security questions must be an array",
      success: false,
    });
  }

  if (data.length !== 3) {
    return res.status(400).json({
      msg: "Exactly 3 security questions are required",
      success: false,
    });
  }

  for (let i = 0; i < data.length; i++) {
    const { questionId, answer } = data[i];

    // Question ID validation
    if (!questionId) {
      return res.status(400).json({
        msg: `Question ${i + 1} is required`,
        success: false,
      });
    }

    if (typeof questionId !== "string") {
      return res.status(400).json({
        msg: `Question ${i + 1} is not valid`,
        success: false,
      });
    }

    // Answer validation
    if (!answer) {
      return res.status(400).json({
        msg: `Answer ${i + 1} is required`,
        success: false,
      });
    }

    if (typeof answer !== "string" || answer.trim().length < 2) {
      return res.status(400).json({
        msg: `Answer ${i + 1} must be at least 2 characters`,
        success: false,
      });
    }
  }

  next();
};
