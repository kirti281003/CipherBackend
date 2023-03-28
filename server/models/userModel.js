const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    about:{
        type:String,
    },
   
        linkedin:{
            type:String
        },
        github:{
            type:String
        },
        facebook:{
            type:String
        },
        instagram:{
            type:String
        },
        twitter:{
            type:String
        },
        website:{
            type:String
        }
    ,
    education:{
        type:String
    },
    role:{
        type:String
    },
    interests:{
        type:[String]
    },
    followers:{
        type:[String]
    }
})
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))
 {next();
 }
    this.password=await bcrypt.hash(this.password,10);
})
userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWTSECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}
userSchema.methods.comparePassword=async function(enteredPassword)
{
    return await bcrypt.compare(enteredPassword,this.password);
}
module.exports=mongoose.model("User",userSchema);