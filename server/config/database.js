const mongoose=require("mongoose");
mongoose.set("strictQuery",true);
const connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>
    {
        console.log("Database Connected")
    })
}
module.exports=connectDatabase;