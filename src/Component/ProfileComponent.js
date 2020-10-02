import React from "react";
import { baseUrl } from "../Constants/urls";
import { Button } from "@material-ui/core";

export default function ProfileComponent() {
  const checkUser = () => {
    fetch(`/user/isAuthenticated`)
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const logout = () => {
    fetch("/user/logout")
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Button color="secondary" variant="contained" onClick={checkUser}>
        Check User
      </Button>
      <Button color="secondary" variant="contained" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}
