import React from "react";
import { Button } from "@material-ui/core";

export default function LoginButton() {
  return (
    <Button
      style={{ marginLeft: 5, marginBottom: 3 }}
      color="secondary"
      variant="contained"
    >
      Login
    </Button>
  );
}
