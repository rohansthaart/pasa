import React, { useState } from "react";
import { Form, Row, Col, Spinner } from "react-bootstrap";
import { Button, Paper } from "@material-ui/core";
import { ToastsStore, ToastsContainer } from "react-toasts";
import { useHistory } from "react-router-dom";

export default function SellerSignupComponent() {
  const history = useHistory();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [citizenshipNumber, setCitizenshipNumber] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const nameValidator = () => fullName.length >= 3;
  const addressValidator = () => address.length >= 3;
  const passwordValidator = () =>
    password1.length !== 0 && password1 === password2;
  const phoneValidator = () => phone.length >= 10;
  const citizenshipValidator = () => citizenshipNumber.length >= 5;
  const emailValidator = () => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    if (
      nameValidator() &&
      addressValidator() &&
      passwordValidator() &&
      phoneValidator() &&
      citizenshipValidator()
    ) {
      fetch(`/seller/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password: password1,
          citizenshipNumber,
          address,
          phone,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          result.status == 200
            ? ToastsStore.success(result.message)
            : ToastsStore.error(result.message);
          if (result.user) {
            localStorage.setItem("Pasa-Seller", JSON.stringify(result.user));
            history.push("seller-verify");
          }
          setisLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setShowError(true);
      setisLoading(false);
    }
  };

  return (
    <div>
      <ToastsContainer className="mytoast" store={ToastsStore} />
      <Paper className="seller-signin">
        <h1 style={{ color: "#E74292" }}>SignUp</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label className="auth-label">Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            {!nameValidator() && showError && (
              <Form.Text className="invalid-text">Invalid Name</Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label className="auth-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {!emailValidator() && showError && (
                  <Form.Text className="invalid-text">Invalid Email</Form.Text>
                )}
              </Col>
              <Col>
                <Form.Label className="auth-label">Shop Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Shop Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                {!addressValidator() && showError && (
                  <Form.Text className="invalid-text">
                    Invalid address
                  </Form.Text>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label className="auth-label">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword1(e.target.value)}
                />
                {!passwordValidator() && showError && (
                  <Form.Text className="invalid-text">
                    Password didnot match
                  </Form.Text>
                )}
              </Col>
              <Col>
                <Form.Label className="auth-label">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password Again"
                  onChange={(e) => setPassword2(e.target.value)}
                />
                {!passwordValidator() && showError && (
                  <Form.Text className="invalid-text">
                    Password didnot match
                  </Form.Text>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Row>
              <Col>
                <Form.Label className="auth-label">Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone Number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                {!phoneValidator() && showError && (
                  <Form.Text className="invalid-text">
                    Invalid phone number
                  </Form.Text>
                )}
              </Col>
              <Col>
                <Form.Label className="auth-label">
                  Cititzenship Number
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Citizenship Number"
                  onChange={(e) => setCitizenshipNumber(e.target.value)}
                />
                {!citizenshipValidator() && showError && (
                  <Form.Text className="invalid-text">
                    Invalid citizenship number
                  </Form.Text>
                )}
              </Col>
            </Row>
          </Form.Group>

          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Button color="secondary" variant="contained" type="submit">
              Signup
            </Button>
          )}
        </Form>
      </Paper>
    </div>
  );
}
