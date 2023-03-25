const app=require("./app");
const dotenv=require("dotenv");
const connect=require("./config/database");
dotenv.config({path:"config/config.env"});
const PORT=process.env.PORT;
connect();

app.listen(PORT,(req,res)=>{
    console.log(PORT);
})