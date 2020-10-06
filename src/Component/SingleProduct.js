import React from "react";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import "./SingleProduct.css";
function SingleProduct(props) {
  return (
    <div
      className="card"
      style={{ width: "190px", height: "315px", margin: "15px" }}
    >
      <img
        src={props.url}
        style={{ objectFit: "cover", height: "188px", width: "188px" }}
      />
      <div>
        <h6 style={{ marginLeft: "6px", textAlign: "left" }}>
          New Flawless Rpilator wax
        </h6>
      </div>
      <div className="row">
        <div
          className="price col"
          style={{ marginLeft: "6px", textAlign: "left" }}
        >
          <h5>Rs.300</h5>

          <h7>Rs.400 -25%</h7>
        </div>
        <div className="col-4">
          <ShoppingCartIcon fontSize="large" color="error" />
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
