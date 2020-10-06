import React from "react";
import "./TopCarousel.css";
function TopCarousel(props) {
  return (
    <div className="center">
      <div id="t" className="carousel slide" data-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              class="img-fluid"
              style={{ width: "60vw", height: "50vh" }}
              src="https://static.wixstatic.com/media/51d501_e791661383674a0ea1a18872b603a391~mv2_d_3898_2953_s_4_2.jpg"
            />
          </div>
          <div className="carousel-item">
            <img
              class="img-fluid"
              style={{
                width: "50vw",

                height: "50vh",
              }}
              src="https://sites.google.com/a/zarasmarket.com/zaras/_/rsrc/1587500064630/live-events/weekly-supermarket-food/2020%20Online%20Shopping%20Web2.jpg"
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
