import React, { useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MobileHeader from "./MobileHeader"
import "./LoginComponent.css";
import SigninComponent from "./SigninComponent";
import SignupComponent from "./SignupComponent";
import SellerSigninComponent from "./SellerComponent/SellerSigninComponent";
import SellerSignupComponent from "./SellerComponent/SellerSignupComponent";
import { Button } from "react-bootstrap";

export default function LoginComponent() {

  const [seller, setSeller] = useState(false);
  if (!seller) {
    return (
      <>
       <div className='title' style={{marginBottom:'15px'}}>
          <h4 className="header">
       Home / Login as User
      </h4>
      </div>
      <React.Fragment >
      <CssBaseline />
     <Container>
        <div className="">
         
          <div className='row'>
            <div className='col-md-6'>
          <SigninComponent />
          </div>
          <div className='col-md-6'>
          <SignupComponent />
          </div>
          </div>
        </div>
        <div style={{ marginTop: 15, textAlign: "center" }}>
          <h4>------------OR-----------</h4>
          <Button onClick={() => setSeller(true)} >Continue as Seller</Button>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        
        </Container>
        </React.Fragment>
        <MobileHeader/>
      </>
    );
  } else {
    return (
      <>
       <div className='title' style={{marginBottom:'15px'}}>
          <h4 className="header">
       Home / Login as Seller
      </h4>
      </div>
        <React.Fragment >
      <CssBaseline />
     <Container>
          <div className="row">
            <div className="col-md-6">
              <SellerSigninComponent />
            </div>
            <div className="col-md-6">
              <SellerSignupComponent />
            </div>
          </div>
        
        <div style={{ marginTop: 15, textAlign: "center" }}>
          <h4>------------OR-----------</h4>
          <Button onClick={() => setSeller(false)}>Continue as User</Button>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        </Container>
        </React.Fragment>
        <MobileHeader/>
      </>
    );
  }
}
