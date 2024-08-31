import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>PLease Login Yourself</div>
    return(
        <div>
        Welcome {user.username}!
        </div>
    )
 
}
export default Profile;
