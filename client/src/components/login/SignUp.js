import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { login, register } from "../../actions/userActions";
import "./Login.css";

function SignUp()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const dispatch=useDispatch();
    const{error,isAuthenticated}=useSelector(state=>state.user)
    const registersubmit=(e)=>
    {e.preventDefault();
        dispatch(register(name,email,password));
        

    }
    useEffect(()=>{
        if(isAuthenticated)
        {
            window.location.href="/user";
        }
        if(error)
        {
            window.alert(error);
        }
    },[error,isAuthenticated])


    return(
        <div className="signupForm">
        <h1>SignUp</h1>
        <div className="loginhead">
        <h1>CipherSchools</h1>
        <h2>Hey, Welcome!</h2>
        <h3>Please provide your valid information to signup </h3>
        </div>
            <form action="/signup"  onSubmit={registersubmit}>
            <input type="text" className="loginInput" placeholder=" Name" onChange={(e)=>setName(e.target.value) }></input>
                <input type="text" className="loginInput" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" className="loginInput" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit" className="submitbutton">Create an account</button>
                <div className="loginspan">Already have an account? <Link to="/" className="loginlink">SignIn </Link></div>
            </form>
            </div>
    )
       
      
   
    
}
export default SignUp;