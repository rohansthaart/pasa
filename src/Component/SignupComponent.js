import React, { useState } from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { ToastsStore, ToastsContainer } from "react-toasts";

export default function SignupComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");
  const [isloading, setisLoading] = useState(false);
  const history = useHistory();

  const signup = () => {
    if (firstName.length < 3) {
      ToastsStore.error("First name must contain atleast 3 characters");
    } else if (lastName.length == 0) {
      ToastsStore.error("Last name is empty");
    } else if (phone.length < 10) {
      ToastsStore.error("Invalid phone number");
    } else if (password1 != password2 || password1.length == 0) {
      ToastsStore.error("Password didnot matched");
    } else {
      setisLoading(true);
      register();
    }
  };

  const register = () => {
    fetch(`/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        password: password1,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        result.status == 200
          ? ToastsStore.success(result.message)
          : ToastsStore.error(result.message);
        if (result.user) {
          localStorage.setItem("Pasa-User", JSON.stringify(result.user));
          history.push("user-verify");
        }
        setisLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    signup();
  };

  return (
    <div class="card" style={{}}>
      <ToastsContainer className="mytoast" store={ToastsStore} />
      <div class="card-body">
        <h1>No account? Signup</h1>

        <form onSubmit={hanldeSubmit}>
          <div className="d-flex">
            <div class="form-group" style={{ width: 250 }}>
              <label for="First Name">First Name</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="form-group" style={{ marginLeft: 10, width: 250 }}>
              <label for="Lastname">Last Name</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex">
            <div class="form-group" style={{ width: 250 }}>
              <label for="Email">Email Address</label>
              <input
                type="email"
                class="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group" style={{ marginLeft: 10, width: 250 }}>
              <label for="Phone Number">Phone Number</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex">
            <div class="form-group" style={{ width: 250 }}>
              <label for="password1">Password</label>
              <input
                type="password"
                class="form-control"
                onChange={(e) => setPassword1(e.target.value)}
              />
            </div>
            <div class="form-group" style={{ marginLeft: 10, width: 250 }}>
              <label for="password2">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            {isloading ? (
              <CircularProgress
                color="secondary"
                style={{ marginRight: 10, marginTop: 20 }}
              />
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ marginTop: 30, width: 100 }}
              >
                Signup
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
