const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt=require("jsonwebtoken");
const User=require("../models/userModel");
exports.isAuthenticated=catchAsyncErrors(async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token)
    {
        return next(new ErrorHandler("Please Login",401));
    }
    const decodeddata=jwt.verify(token,process.env.JWTSECRET);
     req.user=await User.findById(decodeddata.id);
     next();
})