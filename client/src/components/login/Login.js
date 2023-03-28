import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../actions/userActions";
import "./Login.css";

function Login()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const{user,error,isAuthenticated}=useSelector(state=>state.user)
    const dispatch=useDispatch();
    const loginsubmit=(e)=>
    {e.preventDefault();
        dispatch(login(email,password));
       

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
        <>
        <div className="loginForm">
        <h1>SignIn</h1>
        <div className="loginhead">
        <h1>CipherSchools</h1>
        <h2>Hey, Welcome!</h2>
        <h3>Please provide your email and password to signin</h3>

        </div>
            <form action="/"  onSubmit={loginsubmit}>
            
                <input type="text" className="loginInput" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" className="loginInput" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit" className="submitbutton">SignIn</button>
                <div className="loginspan">Don't have an account? <Link to="/signup" className="loginlink">Get Started</Link></div>
            </form>
            </div>
        </>
    )
}
export default Login;