import React from "react";
import "./DepartmentCard.css";
function DepartmentCard({url,title,subTitle}) {
  return (
    
      <div class="property-card">
          <div
            class="property-image"
            style={{
              backgroundImage: `url("${url}")`,
            }}
          >
            <div class="property-image-title"></div>
          </div>
        <div class="property-description">
          <h5> {title}</h5>
          <p>
            {subTitle}
          </p>
        </div>
          <div class="property-social-icons"></div>
        
      </div>
    
  );
}

export default DepartmentCard;
