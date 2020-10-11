import React ,{useState,useContext} from "react";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import "./SingleProduct.css";


import {cartContext} from '../Context/useCart'

function SingleProduct(props) {

  const [cardItem,setCardItem]= useContext(cartContext);

  return (
    <div className="card" style={{ width: "190px", height: "350px" }}>
      <img
        src={props.url}
        style={{ objectFit: "cover", height: "188px", width: "188px" }}
      />
      <div>
        <h6 style={{ marginLeft: "6px", textAlign: "left" }}>{props.name}</h6>
      </div>
      <div className="row">
        <div
          className="price col"
          style={{ marginLeft: "6px", textAlign: "left" }}
        >
          <h4>Rs.{props.price}</h4>

          <h7> -25%</h7>
        </div>
        <div className="col-4">
          <button onClick={e=>setCardItem(prev=>[...prev,{img:props.url,descripton:props.name,price:props.price,quantity:1}])}>
          <ShoppingCartIcon fontSize="large" color="error"/>
          </button>
        </div>
      </div>
      <div>
        <StarIcon fontSize="small" color="error" />
        <StarIcon fontSize="small" color="error" />
        <StarIcon fontSize="small" color="error" />
        <StarIcon fontSize="small" color="error" />
        <StarHalfIcon fontSize="small" color="error" />
      </div>
    </div>
  );
}

export default SingleProduct;
