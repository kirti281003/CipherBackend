const mongoose=require("mongoose");
const User=require("../models/userModel");
const cloudinary=require("cloudinary").v2;
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler");
cloudinary.config({
    cloud_name:"dlgp2ufmn",
    api_key:"738354633193825",
    api_secret:"SzqyhWymF0CoH2bbDut25UzhTPQ"
})
exports.register=catchAsyncErrors(async(req,res,next)=>{
    var user="";
    const{name,email,password}=req.body;
    if(req.files)
    {
    const file=req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
        user=await User.create({
            name:name,
            email:email,
            password:password,
            img:result.url
        });
    })

}
else{
    user=await User.create({
        name:name,
        email:email,
        password:password,
    })
}

sendToken(user,201,res);

})

exports.login=catchAsyncErrors(async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email||!password)
    {
        return next(new ErrorHandler("Please enter all details",400))
    }
    const user=await User.findOne({email}).select("+password");
    if(!user)
    {
        return next(new ErrorHandler("User not found",401))
    }
    const isMatch=user.comparePassword(password);
    if(!isMatch)
    {return next(new ErrorHandler("User not found",401))

    }
   sendToken(user,200,res);
})

exports.updateUser=catchAsyncErrors(async(req,res,next)=>{
    if(req.user.id===req.params.id)
    {
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json({
            success:true,
            updatedUser
        })
    }
    else{
        return next(new ErrorHandler("Cannot update",403))
    }
})