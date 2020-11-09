import React from "react";
import "./TopCarousel.css";
function TopCarousel() {
  return (
    <div className='carouselTop' >
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" >
    <div className="carousel-item active" >
      <img className="d-block img-fluid w-100 " src="http://demo.bestprestashoptheme.com/digimart1/modules/novnivoslider/images/94fe12ea0a4385a6aca9b4631b7f5faf530b73ee_1.jpg" alt="First slide" style={{objectFit:'cover',height:'400px'}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100" src="http://demo.bestprestashoptheme.com/digimart1/modules/novnivoslider/images/f63d217ddf76a04f9aaadbe4e4739450db35ec2c_2.jpg" alt="Second slide" style={{objectFit:'cover',height:'400px'}}/>
    </div>
    <div className="carousel-item">
      <img className="d-block img-fluid w-100" src="http://demo.bestprestashoptheme.com/digimart1/modules/novnivoslider/images/7472957909efb1f58bd6f017310e44ea0e5c690a_3.jpg" alt="Third slide" style={{objectFit:'cover',height:'400px'}}/>
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