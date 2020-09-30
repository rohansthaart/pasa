import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

export default function SigninComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`email : ${email} password:${password}`);
  };
  return (
    <div class="card" style={{ width: 550 }}>
      <div class="card-body">
        <h1>SignIn</h1>
        <h2>Welcome, back!</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group" style={{ maxWidth: 500 }}>
            <label for="Email">Email Address</label>
            <input
              type="email"
              class="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group" style={{ maxWidth: 500 }}>
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <span className="fg-text">Forgot Password?</span>
          <div className="d-flex justify-content-end">
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              style={{ marginTop: 44, width: 100 }}
            >
              Signin
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
