import JWT from "jsonwebtoken";

export const authenticateToken = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        msg: "Please Login Again",
        success: false,
      });
    }
    const decodeUser = await JWT.verify(token, process.env.JWTSECRET);
    const { id } = decodeUser;

    req._id = id;
    next();
  } catch (error) {
    return res.status(500).json({
      msg: "Internal Server Error",
      success: false,
    });
  }
};
