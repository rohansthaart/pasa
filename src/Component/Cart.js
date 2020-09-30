import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function CustomizedBadges() {
  return (
    <div>
      <IconButton aria-label="cart" className="dropdown">
        <StyledBadge badgeContent={9} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
      <div class="dropdown-content">
        <a href="#">aa</a>
      </div>
    </div>
  );
}
