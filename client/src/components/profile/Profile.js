import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userActions";
import Dropelement from "../Webelement/Dropelement";
import Webelement from "../Webelement/Webelement";
import logo from "../../images/logo.png";
import "./Profile.css";

function Profile()
{const dispatch=useDispatch();
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
        <div className="userhead">
        <img src={logo} className="logo" ></img>
        <button className="btn">Edit </button>
        <div>
            <span>Hello</span>
            <h2>{user.name}</h2>
            <span>{user.email}</span>
            </div>
        </div>
        <hr></hr>
        <div className="aboutsection">
            <h2>ABOUT ME</h2>
            <button className="btn">Edit</button>
            <textarea className="about" value={user.about}></textarea>
        </div>
        <hr></hr>
        <div className="web">
        <h1>On The Web</h1>
        <button className="btn">Edit</button>
        <div className="websection">
            <Webelement title="Linkedin" link={user.linkedin}/>
            <Webelement title="Github" link={user.github}/>
            <Webelement title="Facebook" link={user.facebook}/>
            <Webelement title="Twitter" link={user.twitter}/>
            <Webelement title="Instagram" link={user.instagram}/>
            <Webelement title="Website" link={user.website}/>
        </div>
        </div>
        <hr></hr>
        <div className="info">
        <h1>Personal Information</h1>
        <button className="btn">Save</button>
        <div className="infosection">
            <Dropelement id="education" title="Higher Education"
            label1="Primary" label2="Secondary" label3="Graduation" label4="Higher Secondary" label5="Post Graduation"/>
           
            <Dropelement id="role" title="What do you do currently?"
            label1="Schooling" label2="College Student" label3="Teaching" label4="Job" label5="Freelancing"/>
            </div>
        </div>
        <hr></hr>
        <div className="interests">
            <h1>Interests</h1>
            <button className="btn">Edit</button>
            <div className="interestsection">
                {
                    interests &&
                    interests.map(interest=>(
                        <div className="interest">
                        {interest}
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
}
export default Profile;