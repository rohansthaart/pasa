import React, { useState, useContext } from "react";
import Badge from "@material-ui/core/Badge";
import PaymentIcon from "@material-ui/icons/Payment";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";
import CartItem from "./CartItem";
import { cartContext } from "../Context/useCart";
export default function CustomizedBadges() {
  var sum = 0;
  const [cardItem, setCardItem] = useContext(cartContext);
 // sum = cardItem.map((item) => parseInt(item.price) + sum);
  cardItem.forEach(item=>{
    sum = sum + (item.quantity * parseInt(item.price))
  })
  return (
    <div className="dropdown">
      <div
        type="hover"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <Badge badgeContent={cardItem.length} color="primary">
          <ShoppingCartIcon fontSize="large" color="error" />
        </Badge>
      </div>

      <div className="dropdown-menu dropdown-menu-right">
        {cardItem <= 0 ? (
          <div className="center"> YOUR CART IS EMPTY</div>
        ) : (
          <div>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col" colspan="2">Description</th>
                  <th scope="col" colspan="2"> </th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              {cardItem.map((item, index) => (
                <CartItem
                  url={item.img}
                  title={item.descripton}
                  price={item.price}
                  quantity={item.quantity}
                  index={index}
                />
              ))}
            </table>
            <div className="container">
              <h7 className="col">
                <strong>Total:Rs.{sum}</strong>
              </h7>
              <button class="btn btn-outline-secondary ">
                <PaymentIcon onClick={() => console.log(cardItem)} />
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
