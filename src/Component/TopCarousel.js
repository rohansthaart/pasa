import React from "react";
import "./TopCarousel.css";
function TopCarousel(props) {
  return (
    <div style={{ alignItems: "center" }} className="center">
      <div id="t" className="carousel slide" data-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              class="img-fluid"
              style={{ width: "50vw", height: "50vh" }}
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"
            />
          </div>
          <div className="carousel-item">
            <img
              class="img-fluid"
              style={{
                width: "50vw",
                justifyContent: "center",
                height: "50vh",
              }}
              src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_509107562_2000133320009280346_351827.jpg"
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
