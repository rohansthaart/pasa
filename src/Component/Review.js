import React, { Component ,useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import "./Review.css";
function Review(props) {
  
  return (
  
    <div class="review row">
      <Avatar>{((props.email).substring(0,1)).toUpperCase()}</Avatar>
      <div class="review__text col-11" style={{whiteSpace: 'pre-wrap' }}>
        {props.revi}
        <div class="review-person">
          <div class="review-info">
            <p class="review-info-name">
               <div class="review__rating"><Rating name="half-rating-read" size='small' value={props.rating} precision={0.5} readOnly  /></div>{props.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
