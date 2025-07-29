export const validateRegister = (req, res, next) => {
    
  if (!req.body || Object.keys(req.body).length === 0) {
    console.log('Request body is missing');
    return res.status(400).json({ msg: "Request body is missing", success : false });
  }

  const { role, email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Role validation
  if (!role) {
     console.log('Role is required');
    return res.status(400).json({ msg: "Role is required.", success : false });
  }

  // Email validation
  if (!email) {
     console.log('Email is required');
    return res.status(400).json({ msg: "Email is required.", success : false });
  } else if (!emailRegex.test(email)) {
     console.log('Please enter a valid email');
    return res.status(400).json({ msg: "Please enter a valid email.", success : false });
  }

  // Password validation
  if (!password) {
     console.log('Password is required');
    return res.status(400).json({ msg: "Password is required." , success : false });
  } else if (password.length < 6) {
     console.log('Password must be at least 6 characters');
    return res
      .status(400)
      .json({ msg: "Password must be at least 6 characters." , success : false });
  }

  next();
};

export const validateProfile = (req, res, next) => {
   console.log(req);
    console.log(req.file);
  if (!req.body || Object.keys(req.body).length === 0) {
    console.log('Request body is missing');
    return res.status(400).json({ msg: "Request body is missing", success: false });
  }

  const { profilePic, firstName, lastName, phoneNumber, dob, gender } = req.body;
  console.log(req.body);
  
  // Profile Image validation
  if (!profilePic) {
    console.log('Image is required');
    return res.status(400).json({ msg: "Image is required.", success: false });
  } 

  // First Name validation
  if (!firstName) {
    console.log('First Name is required');
    return res.status(400).json({ msg: "First Name is required.", success: false });
  } else if (typeof firstName !== 'string') {
    console.log('First Name is not Valid');
    return res.status(400).json({ msg: "First Name is not Valid", success: false });
  }

  // Last Name validation
  if (!lastName) {
    console.log('Last Name is required');
    return res.status(400).json({ msg: "Last Name is required.", success: false });
  } else if (typeof lastName !== 'string') {
    console.log('Last Name is not Valid');
    return res.status(400).json({ msg: "Last Name is not Valid", success: false });
  }

  // Mobile Number validation
  if (!phoneNumber) {
    console.log('Mobile Number is required');
    return res.status(400).json({ msg: "Mobile Number is required.", success: false });
  } else if (typeof phoneNumber !== 'string' || !/^\d{10}$/.test(number)) {
    console.log('Mobile Number must be exactly 10 digits');
    return res.status(400).json({ 
      msg: "Mobile Number must be exactly 10 digits and contain only numbers", 
      success: false 
    });
  }

  // Date of Birth validation
  if (!dob) {
    console.log('Date of Birth is required');
    return res.status(400).json({ msg: "Date of Birth is required.", success: false });
  } else if (typeof dob !== 'string' || isNaN(new Date(dob).getTime())) {
    console.log('Date of Birth is not valid');
    return res.status(400).json({ 
      msg: "Date of Birth is not valid", 
      success: false 
    });
  }

  // Gender validation
  if (!gender) {
    console.log('Gender is required');
    return res.status(400).json({ msg: "Gender is required.", success: false });
  } else if (typeof gender !== 'string') {
    console.log('Gender is not Valid');
    return res.status(400).json({ msg: "Gender is not Valid", success: false });
  }

  next();
};
