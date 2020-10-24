import React from "react";
import "./TopCarousel.css";
function TopCarousel() {
  return (
    <div className='container carouselTop'>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100" src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
   
  );
}

export default TopCarousel;


// style={{ objectFit: "contain", height: "444px", width: "100%" }}