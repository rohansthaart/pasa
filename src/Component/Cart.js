import React from "react";
import Badge from "@material-ui/core/Badge";
import PaymentIcon from "@material-ui/icons/Payment";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";
import CartItem from "./CartItem";

export default function CustomizedBadges() {
  return (
    <div className="dropdown">
      <div
        type="hover"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon fontSize="large" color="error" />
        </Badge>
      </div>

      <div className="dropdown-menu dropdown-menu-right">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Q X P</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>

          <CartItem
            url="https://s.cdpn.io/3/dingo-dog-bones.jpg"
            title="Dingo Dogs"
            price="12"
            quantity="4"
          />
          <CartItem
            url="https://media.carphonewarehouse.com/is/image/cpw2/iphone-xrWHITE?$xl-retina$"
            title="iphone 11"
            price="12000"
            quantity="1"
          />
          <CartItem
            url="https://images-na.ssl-images-amazon.com/images/I/71vKyimxsiL._UX679_.jpg"
            title="Relish"
            price="12"
            quantity="4"
          />
          <CartItem
            url="https://cdn.mos.cms.futurecdn.net/TxggG6LsWjSnKrx78gVUej-1200-80.jpg"
            title="Surface 3 Pro"
            price="85000"
            quantity="1"
          />
        </table>
        <div className="container">
          <h7 className="col">
            <strong>Total:Rs.{12000}</strong>
          </h7>
          <button class="btn btn-outline-secondary ">
            <PaymentIcon />
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
