import React from "react";
import { Paper, Button } from "@material-ui/core";

export default function ResetPassword() {
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
