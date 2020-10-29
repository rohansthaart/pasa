import React from "react";
import { Paper, Button } from "@material-ui/core";
import "./SideBar.css";
import { ExitToApp, Delete, VerifiedUser } from "@material-ui/icons";
import Avatar from "./SellerAvatar";
import LineChart from "./LineChart";
import DonutChart from "./Donut";
import { useUser } from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
export default function SellerProfile() {
  const { user, setIsSessionAvailable } = useUser();
  const history = useHistory();
  const signout = () => {
    fetch("/seller/logout").then((res) => {
      setIsSessionAvailable(false);
      history.push("/");
    });
  };
  const initials = user
    ? user.fullName.split(" ")[0].charAt(0) +
      user.fullName.split(" ")[1].charAt(0)
    : "";
  return (
    <>
      <Paper className="dashboard-heading-container">
        <h2 className="dashboard-heading">Your Dashboard</h2>
      </Paper>
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <Paper className="seller-profile">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <Avatar initials={initials} />
              </div>
              <div className="col-md-7 col-sm-12 profile-info">
                <h3>{user ? user.fullName : ""}</h3>
                <div className="username-bg">
                  @{user ? user.email.split("@")[0] : ""}
                </div>

                <div className="phone-bg">{user ? user.phone : ""}</div>

                <div className="citizen-bg">
                  {user ? user.citizenshipNumber : ""}
                </div>
              </div>
            </div>
          </Paper>
        </div>
        <div className="col-md-6 col-sm-12">
          <Paper className="action-paper">
            <div>
              <p className="action-text">Actions</p>
            </div>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ExitToApp />}
              className="acc-signout-btn"
              onClick={signout}
            >
              Signout
            </Button>
            <div style={{ marginTop: 4 }}>
              {" "}
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Delete />}
                className="acc-del-btn"
              >
                Delete Account
              </Button>
            </div>
            <div style={{ marginTop: 4 }}>
              <Button
                variant="contained"
                startIcon={<VerifiedUser />}
                className="acc-del-btn"
              >
                Post Ads
              </Button>
            </div>
          </Paper>
        </div>
      </div>
      <div>
        <div className="container graph-container" style={{ marginTop: 10 }}>
          <div className="row">
            <div className="col-md-5 col-sm-12 donut">
              <Paper style={{ width: 405 }}>
                {" "}
                <DonutChart />
              </Paper>
            </div>
            <div className="col-md-6 col-sm-12 area">
              <Paper style={{ width: 495 }}>
                {" "}
                <LineChart />
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
