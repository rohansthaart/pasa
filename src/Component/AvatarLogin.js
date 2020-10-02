import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useUser } from "../Context/UserContext";
import "./AvatarLogin.css";
function AvatarLogin() {
  const { user } = useUser();
  return (
    <div class="avatar">
      {/* <Avatar alt="Semy Sharp" src="/static/images/avatar/1.jpg" /> */}
      <Avatar>{user ? user.firstName.charAt(0) : "S"}</Avatar>
    </div>
  );
}

export default AvatarLogin;
