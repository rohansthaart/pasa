import React from "react";
import "./DepartmentCard.css";
function DepartmentCard(props) {
  return (
    <div class="center">
      <div class="property-card">
        <a href="#">
          <div
            class="property-image"
            style={{
              backgroundImage: `url("${props.url}")`,
            }}
          >
            <div class="property-image-title"></div>
          </div>
        </a>
        <div class="property-description">
          <h5> {props.title}</h5>
          <p>
            Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
            Bingo. Lorem Ipum doth be hard.
          </p>
        </div>
        <a href="#">
          <div class="property-social-icons"></div>
        </a>
      </div>
    </div>
  );
}

export default DepartmentCard;
