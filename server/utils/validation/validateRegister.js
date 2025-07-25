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
