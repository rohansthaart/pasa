import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useUser } from "../Context/UserContext";

import { Link } from "react-router-dom";
import "./AvatarLogin.css";

function AvatarLogin() {
  const { user } = useUser();
  return (
    
    <div class="avatar">
    <Link to="/account" className="nav-link ">
    <Avatar>{user ? user.firstName.charAt(0) : "S"}</Avatar> 
              </Link>
      {/* <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" /> */}
     
    </div>
    
       
      
      
   
   
  );
}

export default AvatarLogin;
