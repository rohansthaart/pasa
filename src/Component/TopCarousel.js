import React from "react";
import "./TopCarousel.css";
function TopCarousel(props) {
  return (
    <div className="container">
      <div id="t" className="carousel slide" data-ride="false">
        <div className="carousel-inner w-100">
          <div className="carousel-item active">
            <img
              class="img-fluid w-100"
              
              src="https://s3.envato.com/files/159993745/Preview/001%20FB%20Cover.jpg"
            />
          </div>
          <div className="carousel-item">
            <img
              class="img-fluid w-100"
              src="https://cdn2.f-cdn.com/contestentries/749782/20994643/57bffd8aa7125_thumb900.jpg"
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
