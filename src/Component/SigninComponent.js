import React, { useState } from "react";
import { CircularProgress, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { ToastsStore } from "react-toasts";
import { useUser } from "../Context/UserContext";

export default function SigninComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { setIsSessionAvailable } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login();
  };
  const login = () => {
    fetch(`/user/signin`, {
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
          history.push("profile");
        } else {
          ToastsStore.error(result.message);
          setLoading(false);
        }
      });
  };
  return (
    <>
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
              {loading ? (
                <CircularProgress color="secondary" />
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: 44, width: 100 }}
                >
                  Signin
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
