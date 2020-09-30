import React from "react";
import { Container } from "@material-ui/core";
import "./LoginComponent.css";
import SigninComponent from "./SigninComponent";
import SignupComponent from "./SignupComponent";

export default function LoginComponent() {
  return (
    <Container className="d-flex justify-content-around ">
      <SigninComponent />
      <SignupComponent />
    </Container>
  );
}
