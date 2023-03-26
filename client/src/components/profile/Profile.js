import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../actions/userActions";

function Profile()
{const dispatch=useDispatch();
const{user,isAuthenticated}=useSelector(state=>state.user)
useEffect(()=>{
    dispatch(getUser())
},[dispatch]);
console.log(user);
if(user)
{
    return(
        <>
        <h1>{user.name}</h1>
        </>
    )
}
}
export default Profile;