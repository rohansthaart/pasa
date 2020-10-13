import React from "react";
import ProfileComponent from "./ProfileComponent";
function Profile(props) {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h4>First Name : {props.firstName} </h4>
        </div>
        <div className="col">
          <h4>Last Name : {props.lastName} </h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {" "}
          <h4>Email Address : {props.email} </h4>
        </div>
        <div className="col">
          {" "}
          <h4>Phone Number : {props.phone} </h4>
          <a href="#">Change</a>
        </div>
      </div>
      <br />
      <div className="dropdown-item">
        <ProfileComponent />
      </div>
    </div>
  );
}

export default Profile;
