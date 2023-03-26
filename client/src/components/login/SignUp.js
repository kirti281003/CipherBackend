import { useState } from "react";
import { useDispatch } from "react-redux";

import { login, register } from "../../actions/userActions";

function SignUp()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[name,setName]=useState("");
    const dispatch=useDispatch();
    const registersubmit=(e)=>
    {e.preventDefault();
        dispatch(register(name,email,password));

    }


    return(
        <>
            <form action="/signup" className="loginForm" onSubmit={registersubmit}>
            <input type="text" className="loginInput" placeholder="Enter name" onChange={(e)=>setName(e.target.value) }></input>
                <input type="text" className="loginInput" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="text" className="loginInput" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default SignUp;