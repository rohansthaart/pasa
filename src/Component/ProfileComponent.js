import React, { useEffect } from "react";
import { baseUrl } from "../Constants/urls";
import './ProfileComponent.css'
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
    <section className='row checkUser' >
      <button className='btn btn-outline-primary checkUser' onClick={checkUser} >Check User</button><br/>
      <button className='btn btn-outline-primary logOut' onClick={logout}> Log Out</button>
     
      </section>
  );
}
