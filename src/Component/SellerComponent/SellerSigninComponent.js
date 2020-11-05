import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { Form, Spinner } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { PersonOutline } from "@material-ui/icons";
import { ToastsStore } from "react-toasts";
import { useHistory } from "react-router-dom";

import "./Auth.css";
import { useUser } from "../../Context/UserContext";
export default function SellerSigninComponent() {
  const { setIsSessionAvailable } = useUser();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`/seller/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          ToastsStore.success(result.message);
          setLoading(false);
          setIsSessionAvailable(true);
          history.push("merchant");
        } else {
          ToastsStore.error(result.message);
          setLoading(false);
        }
      });
  };
  const resetPassword = () => {
    if (email.length === 0)
      ToastsStore.error("Please fill up your email column");
    else {
      fetch("/seller/requestResetPassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((res) => {
          ToastsStore.info(res.message);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <Paper className="seller-signin">
        <h1 style={{ color: "#E74292" }}>SignIn</h1>
        <div style={{ marginLeft: "42%" }}>
          <div className="icon-avatar">
            <PersonOutline fontSize="large" />
          </div>
        </div>
        <h2>Welcome Back!</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label className="auth-label">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label className="auth-label">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <p className="forgot-text" onClick={resetPassword}>
            Forgot Password?
          </p>
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Button color="secondary" variant="contained" type="submit">
              Signin
            </Button>
          )}
        </Form>
      </Paper>
    </div>
  );
}
