import jwt from "jsonwebtoken";
import User from "../models/usermodels.js"; // Adjust the path as needed

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("Password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user; // Attach user to the request object
    next(); // Pass control to the next middleware
  } catch (error) {
    console.error("Error in protect middleware:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default protectRoute;
