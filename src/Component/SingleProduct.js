import React, { useState, useContext, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Rating from "@material-ui/lab/Rating";
import "./SingleProduct.css";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/useCart";
import CartItem from "./CartItem";
import { Card } from "react-bootstrap";

function SingleProduct(props) {
  const [value, setValue] = React.useState(0);
  const [cardItem, setCardItem] = useContext(cartContext);

  const name = props.name;
  const title = name.substring(0, 30);

  const addToCart = () => {
    if (cardItem.some((item) => item.id === props.id)) {
      let item = cardItem.find((item) => item.id === props.id);
      item.quantity = item.quantity + 1;
      const index = cardItem.indexOf(item);
      const virtualCart = [...cardItem];
      const removedItem = virtualCart.splice(index, 1);
      const newCart = cardItem.filter((item) => item.id !== removedItem[0].id);
      newCart.push(item);
      setCardItem(newCart);
    } else {
      setCardItem((prev) => [
        ...prev,
        {
          id: props.id,
          img: props.url,
          descripton: props.name,
          price: props.price,
          quantity: 1,
        },
      ]);
    }
  };
  return (
    <div className="card single-card" style={{ width: "100%", height: "100%" }}>
      <Link to={`/product/${props.id}`}>
        <img
          src={props.url}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </Link>
      <div>
        <p
          style={{ marginLeft: "6px", textAlign: "left", fontSize: "1rem" }}
          className="item-title"
        >
          {title}...
        </p>
      </div>
      <div className="row ">
        <div
          className="price col"
          style={{ marginLeft: "2px", textAlign: "left" }}
        >
          <h7>Rs.{props.price}</h7>

          {props.discount && (
            <p className="discount-percentage"> {props.discount}off</p>
          )}
        </div>

        <div className="col-4">
          <ShoppingCartIcon
            fontSize="large"
            color="error"
            onClick={addToCart}
          />
        </div>
      </div>

      <Rating
        className="fixed-rating"
        name="read-only half-rating"
        size="small"
        precision={0.1}
        value={props.rating}
        readOnly
      />
    </div>
  );
}

export default SingleProduct;
