import React from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './MobileHeader.css'


export default function LabelBottomNavigation() {
  return (


    <div class="d-md-none navbar fixed-bottom container-fluid" style={{backgroundColor:'white'}}>
    
      <BottomNavigationAction className="d-flex justify-content-around" style={{padding:"0"}} label="HOME" icon={<div><HomeIcon  fontSize="large"/><br/>Home</div>} />
      <BottomNavigationAction className="d-flex justify-content-around" style={{padding:"0"}}  label="Signin/Signup" icon={<div><PersonIcon fontSize="large"/><br/>Login/Signup</div>} /> 
    <BottomNavigationAction className="d-flex justify-content-around" style={{padding:"0"}}  label="Cart" icon={<div><ShoppingCartIcon fontSize="large"/><br/>Cart</div>} />

</div>
  );
}

