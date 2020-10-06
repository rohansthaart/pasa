import React, { useState } from "react";
import "./DetailedItem.css";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
function DetailedItem() {
  return (
    <div className="detail-specification">
      <div className="row">
        <div className="col-xl-1">
          <div id="slider-thumbs">
            <ul class="reset-ul   ba">
              <li className="m-1">
                <a data-target="#myCarouselArticle" data-slide-to="0">
                  <img
                    class="img-fluid fit-image"
                    src="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/d5/e5/d5e5c9ac1b58d6ab5319d359ae7233dcab4a11c2.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]"
                  />
                </a>
              </li>

              <li className="m-1">
                <a data-target="#myCarouselArticle" data-slide-to="1">
                  <img
                    class="img-fluid fit-image"
                    src="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/9a/02/9a0284133799b0cd0b508c43302622ca8403c848.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
                    alt=""
                  />
                </a>
              </li>

              <li className="m-1">
                <a data-target="#myCarouselArticle" data-slide-to="2">
                  <img
                    class="img-fluid fit-image"
                    src="https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*main image*/}
        <div className=" col-lg-5 ">
          <div id="myCarouselArticle" class="carousel " data-ride="false">
            <div style={{ padding: "0px" }}>
              <div class="carousel-item active">
                <img
                  className="slide-image"
                  src="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/d5/e5/d5e5c9ac1b58d6ab5319d359ae7233dcab4a11c2.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]"
                  alt="Card image cap"
                  title=""
                />
              </div>
              <div class="carousel-item">
                <img
                  className="slide-image"
                  src="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/9a/02/9a0284133799b0cd0b508c43302622ca8403c848.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[LOOKBOOK],res[s],hmver[1]&call=url[file:/product/main]"
                  alt="Card image cap"
                  title=""
                />
              </div>
              <div class="carousel-item">
                <img
                  className="slide-image"
                  src="https://i.dell.com/sites/csimages/Video_Imagery/all/xps_7590_touch.png"
                  alt="Card image cap"
                  title=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 ">
          <div className="product_title">
            <h3>Ghost Of Disapproval Pullover Hoodie</h3>
          </div>
          <div className="rating-review">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon /> 12 Reviews
          </div>
          <div className="brand-name">Brand: h&m </div>
          <div className="small-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac
            auctor augue mauris augue neque gravida in fermentum. Ullamcorper a
            lacus vestibulum sed arcu. Ultrices in iaculis nunc sed augue lacus
            viverra vitae...
          </div>
          <div className="Price">
            <h3>Rs.1600</h3>
            <h4>
              <span className="discount">Rs.2000</span> -20%
            </h4>
          </div>
          <div className="quantity mt-4">
            Quantity:{" "}
            <button className="btn ">
              <IndeterminateCheckBoxOutlinedIcon />
            </button>
            <strong>1</strong>
            <button className="btn ">
              <AddBoxOutlinedIcon />
            </button>
          </div>
          <div className="buy-cart mt-4 center">
            <button type="button" class="btn btn-outline-primary m-3 ">
              <PaymentOutlinedIcon />
              BUY IT NOW
            </button>
            <button type="button" class="btn btn-outline-success m-3">
              <ShoppingCartIcon />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="specification">
        <ul className="nav " id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
            >
              <h3>Specifications</h3>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
            >
              <h3>Reviews</h3>
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <ul style={{ marginLeft: "5px" }}>
              <li>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet
              </li>
              <li>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat
              </li>
              <li>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum
              </li>
              <li>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum
              </li>
              <li>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum
              </li>
              <li>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum
              </li>
            </ul>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedItem;
