import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useProduct } from "../Context/ProductContext";
import SingleProduct from "./SingleProduct";
import "./HomeProducts.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, borderColor: "black" }}
      onClick={onClick}
    />
  );
}
export default function HomeProducts() {
  const { products } = useProduct();
  var settings = {
    dots: true,

    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slides",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div style={{ width: "98%", paddingLeft: 10 }}>
      <Slider {...settings}>
        <div className="row">
          {products.map((product) => {
            const rating = product.review.map((r) => r.rating);
            var sum = 0;
            for (let i = 0; i < rating.length; i++) {
              sum = sum + rating[i];
            }
            var avgRating = sum / rating.length;
            console.log("AVG Rating", avgRating);
            return (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <SingleProduct
                  id={product._id}
                  name={product.name}
                  price={product.unitPrice}
                  url={product.image[0]}
                  discount={product.discount}
                  rating={avgRating}
                />
              </div>
            );
          })}
        </div>
      </Slider>
    </div>
  );
}
