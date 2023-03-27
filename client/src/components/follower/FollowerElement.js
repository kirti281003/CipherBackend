import logo from "../../images/logo.png";
import "./FollowerElement.css";

function FollowerElement()
{
    return(
        <>
        <div className="follower">
            <img src={logo} className="logo"></img>
            <div>Yash Aggarwal</div>
            <div>College Student</div>
            <div>10 Followers</div>
            <div className="follow">Follow</div>
        </div>

        </>
    )
}
export default FollowerElement;