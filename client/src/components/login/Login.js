import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/userActions";

function Login()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const dispatch=useDispatch();
    const loginsubmit=(e)=>
    {e.preventDefault();
        dispatch(login(email,password));

    }


    return(
        <>
            <form action="/login" className="loginForm" onSubmit={loginsubmit}>
                <input type="text" className="loginInput" onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="text" className="loginInput" onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default Login;