import React, { Component } from "react";
import "./Review.css";
function Review(props) {
  return (
    <div class="review row">
      <img src={props.url} alt="User 1" class="review__photo " />
      <div class="review__text col-11">
        {props.review}
        <div class="review-person">
          <div class="review-info">
            <p class="review-info-name">
              {props.name} <br />
              {props.email} <div class="review__rating">7.8</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
