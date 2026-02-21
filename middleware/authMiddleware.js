const jwt  = require('jsonwebtoken');
const Key = process.env.SECRET_KEY;

const authMiddleware = (req,res,next) => {
  const token = req.headers.authorization;

  if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }
try{
  console.log(req.headers);
    // 2️⃣ Token verify karo
    // const tokenValue = token.split(" ")[1];
    const decoded = jwt.verify(token,Key);
    console.log("Token: ",token);
    req.user = decoded;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
      error: error.message
    });
  }
};

module.exports = authMiddleware;