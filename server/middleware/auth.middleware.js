const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const protect = async(req,res,next) =>{
    let token = req.headers.authorization?.split(" ")[1];
    if(token){
        try {
            const decoded = jwt.verify(token,process.env.JWT_SECRET );
            req.user = await User.findById(decoded.id).select("-password");
            next();
        } catch (error) {
            return res.status(401).json({message:"Invalid or expired token"})
        }
    }else{
        return res.status(401).json({message:"No token Provided"})
    }
}

module.exports = protect;