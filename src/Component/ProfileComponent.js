import React, { useEffect } from "react";
import { baseUrl } from "../Constants/urls";
import { Button } from "@material-ui/core";
import { useUser } from "../Context/UserContext";
import { useHistory } from "react-router-dom";

export default function ProfileComponent() {
  const {
    user,
    isSessionAvailable,
    setIsSessionAvailable,
    setUser,
  } = useUser();
  const history = useHistory();

  useEffect(() => {
    // if (isSessionAvailable === false) {
    //   history.push("/login");
    // }
  }, []);

  const checkUser = () => {
    console.log(user);
    console.log(isSessionAvailable);
  };
  const logout = () => {
    fetch("/user/logout")
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    setUser(null);
    setIsSessionAvailable(false);
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
