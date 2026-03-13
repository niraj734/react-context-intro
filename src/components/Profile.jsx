import React, { useContext } from "react";
import UserContext from "../Context/userContext";
function Profile(){
    const{user}=useContext(UserContext)
    if(!user) return<p> please login</p>
    return <div>welcome {user.userName}</div>

}
export default Profile