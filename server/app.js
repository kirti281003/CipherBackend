const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const fileUpload=require('express-fileupload');
const bodyParser=require("body-parser");
const errorMiddleWare=require("./middleware/error");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

app.use(fileUpload({
    useTempFiles:true
}))
const user=require("./routes/userRoute");
app.use("/api/v1",user);
app.use(errorMiddleWare);
module.exports=app;