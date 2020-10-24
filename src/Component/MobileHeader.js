import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import './MobileHeader.css'


export default function LabelBottomNavigation() {
  const { isSessionAvailable } = useUser();
  const { user } = useUser();
  return (


    <div class="d-md-none navbar fixed-bottom container-fluid " style={{backgroundColor:'white'}}>
    
    <Link to="/" className="nav-link"><BottomNavigationAction className="d-flex justify-content-around" style={{padding:"0"}} label="HOME" icon={<div><HomeIcon  fontSize="large"/><br/>Home</div>} /></Link>
    {isSessionAvailable ? (
      user && user.citizenshipNumber ? (
        <Link to="/merchant" className="nav-link">
          <BottomNavigationAction className="d-flex justify-content-around" style={{padding:"0"}}  label="" icon={<div><PersonIcon fontSize="large"/><br/>{user ? user.firstName : "S"}</div>} />
          
        </Link>
      ) : (
        <Link to="/account" className="nav-link ">
          <BottomNavigationAction className="d-flex justify-content-around" style={{padding:"0"}}  label="" icon={<div><PersonIcon fontSize="large"/><br/>{user ? user.firstName : "S"}</div>} />
          
        </Link>
      )
            
          ) : (
            <Link to="/login" className="nav-link" style={{paddingLeft:'0px'}}>
              <BottomNavigationAction className="d-flex justify-content-around" style={{padding:"0"}}  label="Signin/Signup" icon={<div><PersonIcon fontSize="large"/><br/>Login/Signup</div>} />
            </Link>
          )}
       
    <BottomNavigationAction className="d-flex justify-content-around" style={{padding:"0"}}  label="Cart" icon={<div><ShoppingCartIcon fontSize="large"/><br/>Cart</div>} />

</div>
  );
}

