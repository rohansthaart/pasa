import React from "react";
import "./TopCarousel.css";
function TopCarousel(props) {
  return (
    <div className="container">
      <div id="t" className="carousel slide" data-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              class="img-fluid w-100"
              style={{ objectFit: "contain", height: "444px", width: "100%" }}
              
              src="https://s3.envato.com/files/159993745/Preview/001%20FB%20Cover.jpg"
              
            />
          </div>
          <div className="carousel-item">
            <img
           style={{ objectFit: "center", height: "444px", width: "100%" }}
              
              src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/133398181/original/4cba1bec4e553d67aa7fcbae7c698414104691ce/create-attractive-cover-creative-banner-fb-cover-ads-social-media.jpg"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#t"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#t"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default TopCarousel;
