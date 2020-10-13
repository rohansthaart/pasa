import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useUser } from "../Context/UserContext";

import { Link } from "react-router-dom";
import "./AvatarLogin.css";

function AvatarLogin() {
  const { user } = useUser();
  return (
    <div class="avatar">
      {user && user.citizenshipNumber ? (
        <Link to="/merchant" className="nav-link">
          <Avatar>{user ? user.fullName.charAt(0) : "S"}</Avatar>
        </Link>
      ) : (
        <Link to="/account" className="nav-link ">
          <Avatar>{user ? user.firstName.charAt(0) : "S"}</Avatar>
        </Link>
      )}
    </div>
  );
}

export default AvatarLogin;
