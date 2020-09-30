import React, { useState } from "react";
import { Button } from "@material-ui/core";
export default function SignupComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [phone, setPhone] = useState("");

  const hanldeSubmit = (e) => {
    e.preventDefault();
    alert(
      `first : ${firstName} last: ${lastName} email: ${email} phone: ${phone} p1:${password1} p2: ${password2}`
    );
  };

  return (
    <div class="card" style={{}}>
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
            {/* <h6>Forgot Password?</h6> */}

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ marginTop: 30, width: 100 }}
            >
              Signup
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
