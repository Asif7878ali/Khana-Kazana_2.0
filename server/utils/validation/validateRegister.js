export const validateRegister = (req, res, next) => {
    
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ msg: "Request body is missing" });
  }

  const { role, email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Role validation
  if (!role) {
    return res.status(400).json({ msg: "Role is required." });
  }

  // Email validation
  if (!email) {
    return res.status(400).json({ msg: "Email is required." });
  } else if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: "Please enter a valid email." });
  }

  // Password validation
  if (!password) {
    return res.status(400).json({ msg: "Password is required." });
  } else if (password.length < 6) {
    return res
      .status(400)
      .json({ msg: "Password must be at least 6 characters." });
  }

  next();
};
