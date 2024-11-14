require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Admin } = require("../model/CreateModels");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized, I SAY YOU ARE NOT AUTHORIZED" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;

    const isSudo = await Admin.findOne({
      _id: req.userId,
      sudoRole: "sudoAdmin",
    });
    if (!isSudo) {
      return res
        .status(403)
        .json({ message: "Unauthorized, ADMIN DOES NOT HAVE SUDO ROLE" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
