import React, { useState } from "react";
import { Container } from "@material-ui/core";
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
        <div className="container">
          <div className='row'>
            <div className='col justify-content-center'>
          <SigninComponent />
          </div>
          <div className='col justify-content-center'>
          <SignupComponent />
          </div>
          </div>
        </div>
        <div style={{ marginTop: 15, textAlign: "center" }}>
          <h4>------------OR-----------</h4>
          <Button onClick={() => setSeller(true)}>Continue as Seller</Button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SellerSigninComponent />
            </div>
            <div className="col-md-6">
              <SellerSignupComponent />
            </div>
          </div>
        </div>
        <div style={{ marginTop: 15, textAlign: "center" }}>
          <h4>------------OR-----------</h4>
          <Button onClick={() => setSeller(false)}>Continue as User</Button>
        </div>
      </>
    );
  }
}
