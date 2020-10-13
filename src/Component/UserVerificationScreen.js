import React, { useState } from "react";
import { Paper, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  ToastsStore,
  ToastsContainer,
  ToastsContainerPosition,
} from "react-toasts";

import "./UserVerification.css";

export default function UserVerificationScreen() {
  const [verificationCode, setVerificationCode] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const compareCode = () => {
    const user = JSON.parse(localStorage.getItem("Pasa-User"));
    if (user) {
      if (user.code.toString() === verificationCode) {
        fetch(`/user/verifyUser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: user._id,
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            ToastsStore.success(result.message);
            history.push("account");
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        ToastsStore.error("Invalid Code!");
        setLoading(false);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    compareCode();
    // history.push("profile");
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <ToastsContainer
        store={ToastsStore}
        className="verificationToast"
        position={ToastsContainerPosition.TOP_CENTER}
      />
      <Paper elevation={3} className="verifyContainer">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="verification" className="font-weight-bold">
              Verification Code
            </label>

            <input
              type="text"
              class="form-control"
              placeholder="Eg: 1234"
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <small id="emailHelp" class="form-text text-muted">
              Verification code has been sent to your email. Please enter the
              code here
            </small>
          </div>

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            disabled={loading}
          >
            Verify
          </Button>
        </form>
      </Paper>
    </div>
  );
}
