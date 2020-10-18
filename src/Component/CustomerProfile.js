import React,{useEffect,useState} from "react";
import "./CustomerProfile.css";
import DetailedItem from "./DetailedItem";
import Profile from './Profile'
import Orders from "./Orders";
import Address from './Address'
import AvatarLogin from './AvatarLogin';
import axios from 'axios'
import {useUser} from "../Context/UserContext";



function CustomerProfile() {
  const user = useUser().user
 
  console.log(user.email);
  
  return (
    <div className="row ">
     <br/>
      <div className="col-3">
        <div className='center'><AvatarLogin/></div>
      <div className='center'>Hello,{user.firstName} {user.lastName} </div><br/>
      <div>
 
      </div>
        <div
          className="nav  flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Profile info
          </a>
          <a
            className="nav-link"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Addresses
          </a>
          <a
            className="nav-link"
            id="v-pills-messages-tab"
            data-toggle="pill"
            href="#v-pills-messages"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Payment methods
          </a>
          <a
            className="nav-link"
            id="v-pills-settings-tab"
            data-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Orders
          </a>
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
           < Profile firstName={user.firstName} lastName={user.lastName} email={user.email} phone={user.phone}/>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <Address/>
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            Payment methods
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
