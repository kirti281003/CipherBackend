import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userActions";
import "./Profile.css";
import 'reactjs-popup/dist/index.css';
import React from "react";
import User from "./User";
import About from "./About";
import Web from "./Web";
import Info from "./Info";
import Interests from "./Interests";


function Profile()
{
 
    
const dispatch=useDispatch();
const{user,isAuthenticated}=useSelector(state=>state.user)
useEffect(()=>{
    dispatch(getUser())
},[dispatch]);
console.log(user);

if(user)
{
    const interests=user.interests;
console.log(user.interests);
    return(
        <>
        <User name={user.name} email={user.email}/>
        <hr></hr>
        <About about={user.about}/>
        <hr></hr>
        <Web linkedin={user.linkedin} github={user.github} twitter={user.twitter} facebook={user.facebook} instagram={user.instagram}
        website={user.website}/>
        <hr></hr>
        <Info/>
        <hr></hr>
      <Interests interests={interests}/>
        </>
    )
}
}
export default Profile;