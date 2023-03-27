const mongoose=require("mongoose");
const User=require("../models/userModel");
const bcrypt=require("bcrypt");
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
    
    const{name,email,password}=req.body;
if(req.files)
{console.log(true);
    const file=req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,async(err,result)=>{
      const user=await User.create({
            name:name,
            email:email,
            password:password,
            img:result.url
        });
        sendToken(user,201,res);
    })
}

else{
   const user=await User.create({
        name:name,
        email:email,
        password:password,
    })
    sendToken(user,201,res);
}



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
        return next(new ErrorHandler("User not found",404))
    }
    const isMatch=await user.comparePassword(password);
    if(!isMatch)
    {return next(new ErrorHandler("User not found",404))

    }
   sendToken(user,200,res);
})

// exports.updateUser=catchAsyncErrors(async(req,res,next)=>{

//    if(req.user.id===req.params.id)
//    {
//         const updatedUser=await User.findByIdAndUpdate(req.params.id,{
//             $set:req.body
//         },{new:true})
//         res.status(200).json({
//             success:true,
//             updatedUser
//         })
//    }
//    else{
//     return next(new ErrorHandler("Cannot update",403));
//    }

// })
exports.updateUser=catchAsyncErrors(async(req,res,next)=>{
console.log(req.body);
        const updatedUser=await User.findByIdAndUpdate(req.user.id,{
            $set:req.body
        },{new:true})
        console.log(updatedUser);
        res.status(200).json({
            success:true,
            updatedUser
        })
    })

exports.getUser=catchAsyncErrors(async(req,res,next)=>{
    const user=await User.findById(req.user.id);
    if(!user)
    {
        return next(new ErrorHandler("No such User Found",404))
    }
    res.status(200).json({
        success:true,
        user
    })
})

exports.updatepassword=catchAsyncErrors(async(req,res,next)=>{
    const{currentPassword,newPassword,confirmPassword}=req.body;
    if(!currentPassword || !newPassword || !confirmPassword)
    {
        return next(new ErrorHandler("Enter all values",400));
    }
    const user=await User.findById(req.user.id);
    if(!user)
    {
        return next(new ErrorHandler("No user Found",404));
    }
    const isMatch=await user.comparePassword(currentPassword);
    console.log(isMatch);
    if(!isMatch)
    {
        return next(new ErrorHandler("Wrong current password",404));
    }
    if(newPassword!=confirmPassword)
    {
        return next(new ErrorHandler("Password's dont match",404));
    }
    user.password=newPassword;
    await user.save();
    sendToken(user,200,res);
})