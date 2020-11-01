import React from "react";
import "./DepartmentCard.css";
function DepartmentCard({url,title,subTitle}) {
  return (
    
      <div className="property-card">
          <div
            className="property-image"
            style={{
              backgroundImage: `url("${url}")`,
            }}
          >
            <div className="property-image-title"></div>
          </div>
        <div className="property-description">
          <h5> {title}</h5>
          <p>
            {subTitle}
          </p>
        </div>
          <div className="property-social-icons"></div>
        
      </div>
    
  );
}

export default DepartmentCard;
