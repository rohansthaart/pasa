import React ,{useState,useContext} from "react";
import Badge from "@material-ui/core/Badge";
import PaymentIcon from "@material-ui/icons/Payment";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";
import CartItem from "./CartItem";
import {cartContext} from '../Context/useCart'
export default function CustomizedBadges() {
  let sum =0;
  const [cardItem,setCardItem]= useContext(cartContext);
  sum = cardItem.map(item=>parseInt(item.price)+ sum)
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
        
      {cardItem<=0 ?<div className='center'> YOUR CART IS EMPTY</div> : 
      <div>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">QxP</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
      {cardItem.map(item=><CartItem 
            url={item.img}
            title={item.descripton}
            price={item.price}
            quantity={item.quantity}
            
          /> )}
          
        
          
        </table>
        <div className="container">
          <h7 className="col">
            <strong>Total:Rs.{sum}</strong>
          </h7>
          <button class="btn btn-outline-secondary ">
            <PaymentIcon />
            Checkout
          </button>
        </div>
      </div>}
      </div>
    </div>
  );
}
