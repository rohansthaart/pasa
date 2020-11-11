import React, { useState, useContext, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Rating from "@material-ui/lab/Rating";
import "./SingleProduct.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { cartContext } from "../Context/useCart";
import CartItem from "./CartItem";
import { Card } from "react-bootstrap";

function SingleProduct(props) {
  const [value, setValue] = React.useState(0);
  const [cardItem, setCardItem] = useContext(cartContext);

  const name = props.name;
  const title = name.substring(0, 20);

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
        <div style={{ height: 186 }}>
          <img
            src={props.url}
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </div>
      </Link>
      <div>
        <p
          style={{ marginLeft: "6px", textAlign: "left", fontSize: "1rem" }}
          className="item-title"
        >
          {title}...
        </p>
      </div>
      <Rating
        className="fixed-rating"
        name="read-only half-rating"
        size="small"
        precision={0.1}
        value={props.rating}
        readOnly
      />
      <div className="row ">
        <div
          className="price col"
          style={{ marginLeft: "2px", textAlign: "left" }}
        >
          <h7>Rs.{props.price}</h7>

          {props.discount && (
            <p className="discount-percentage" style={{ fontWeight: "bold" }}>
              {" "}
              {props.discount} off
            </p>
          )}
        </div>

        {/* <div className="col-4">
          <ShoppingCartIcon
            fontSize="large"
            color="error"
            onClick={addToCart}
          />
        </div> */}
      </div>
      <br />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ShoppingCartIcon />}
        style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}
        fullWidth
        onClick={addToCart}
      >
        Add
      </Button>
    </div>
  );
}

export default SingleProduct;
