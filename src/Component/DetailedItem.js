import React, { useState ,useContext} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MoneyOutlinedIcon from "@material-ui/icons/MoneyOutlined";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./DetailedItem.css";
import { useProduct } from "../Context/ProductContext";
import {useUser} from "../Context/UserContext";
import Specification from "./Specification";
import MobileHeader from "./MobileHeader"
import Footer from "./Footer";
import Review from "./Review";
import {cartContext} from '../Context/useCart'
import Products from "./Products";



function DetailedItem(props) {
  const [addReview, setAddReview] = useState("");
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const { products, setChanged,changed } = useProduct();
  const {isSessionAvailable} = useUser();
  const { id } = useParams();
  const selectedProduct = products.filter((product) => product._id === id)[0];
  const [selectedImage, setSelectedImage] = useState(selectedProduct.image[0]);
  const detail = props.description.substring(0, 485);
  const [count, setCount] = useState(1);
  const [description, setDescription] = useState("specification");

  const reviews = props.review;

  const uploadReview = (e) => {
    e.preventDefault();
   if(isSessionAvailable){
    fetch(`/products/${id}/addReview`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        review: addReview,
        rating: value,
      }),
    }).then(res => {
      setAddReview("");
      setChanged(!changed)
    }).catch(err=>alert(err))
   }
   else {
    alert("You are not logged in! Please login first to add review")
    
   }
  };

  const reviewer = reviews.length;
  const arrayRating = reviews.map((rev) => rev.rating);
  const sumRating = arrayRating.reduce((a, b) => a + b, 0);
  const avgRating = (sumRating / reviewer).toFixed(1);

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const [cardItem,setCardItem]= useContext(cartContext);
  const addToCart = () => {
    if(cardItem.some(item => item.id === props.id)){
     let item = cardItem.find(item=>item.id === props.id);
     item.quantity = item.quantity + 1;
      const index = cardItem.indexOf(item);
      const virtualCart = [...cardItem];
      const removedItem = virtualCart.splice(index, 1);
      const newCart = cardItem.filter(
        (item) => item.id !== removedItem[0].id
      );
      newCart.push(item);
      setCardItem(newCart);
    }
    else {
      setCardItem(prev=>[...prev,{id:props.id,img:props.url,descripton:props.name,price:props.price,quantity:1}])
    }
  }




  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
    <div className="detail-specification ">
      <div className="row">
        {/*main image*/}
        <div className=" col-md-6 col-lg-6 col-xl-6">
          <div>
            <div id="myCarouselArticle" class="carousel " data-ride="false">
              <div style={{ padding: "0px" }}>
                <div class="carousel-item active">
                  <img
                    className="slide-image center"
                    src={selectedImage}
                    alt="Card image cap"
                    title=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div id="" style={{ marginTop: "5px" }}>
              <ul  style={{ marginLeft: "55px" }}>
                {selectedProduct.image.map((product) => (
                  <li className='ba'>
                    <a data-target="#myCarouselArticle" data-slide-to={"{0++}"}>
                      <img
                        class="img-fluid fit-image"
                        src={product}
                        onClick={() => setSelectedImage(product)}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
          
            <h2 className="product_title">{props.name}</h2>
          
        
        
          <Rating
              name="half-rating-read"
              value={avgRating}
              readOnly
              precision={0.1}
            />
            <Typography component="legend">Review ({reviewer})</Typography>
            
          
          <div className="brand-name">Brand:</div>
          <br />
          <div className="small-description">{detail}...</div>
          <div className="Price">
            <h3>Rs.{props.price}</h3>

            <h4>
              <span className="discount">Rs.2000 </span> -{props.discount}
            </h4>
            
          </div>
          <div className="buy-cart mt-4 center">
              <button type="button" class="btn btn-outline-primary m-3 ">
                <PaymentOutlinedIcon />
                BUY IT NOW
              </button>
              <button type="button" class="btn btn-outline-success m-3" onClick={addToCart}>
                <ShoppingCartIcon />
                Add to Cart
              </button>
            </div>
        </div>

        <div className="col-12 col-lg-6 col-md-12 col-xl-12 card">
          <div>
           
            Delevery Options <br />
            <LocationOnOutlinedIcon />
            Bagmati,kathmandu Metro 22- Newroad Area,Newroad
            <a href=""> CHANGE</a>
            <div className="row">
              <div className="delevery-time col-6">
                <HomeWorkOutlinedIcon />
                Home Delevery
              </div>
              <div className="col-2 delevery-charge">Free</div>
              <div className="col-4 delevery-charge">
                2-5 days
                <br />
              </div>
              <div className="col">
                <MoneyOutlinedIcon /> on Delivery Available
              </div>
            </div>
            <div className="row">
              <div className="col">
                <VerifiedUserOutlinedIcon />
                Return and Warranty{" "}
              </div>
              <div className="col">7 days returns </div>
            </div>
            <hr />
            change of mind is not applicable
            <br />1 Year Local saller warrenty
            <hr />
            <div className="saler row">
              <div className="col-8">
                Sold by
                <h4>{props.seller}</h4>
              </div>
              <div className="col-4">Chat Now</div>
            </div>
            
            <div className="row ">
              <div className="col">
                <h7> Positive Seller Ratings</h7> <br />
                <h3>76%</h3>
              </div>
              <div className="col">
                <h7>Ship on Time</h7>
                <br />
                <h3>100%</h3>
              </div>
              <div className="col">
                <h7>Chat Response Rate</h7>
                <br />
                <h3>100%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-specification ">
        <div>
          <button
            className="btn"
            onClick={() => setDescription("specification")}
          >
            <h3>Specification</h3>
          </button>
          <button className="btn" onClick={() => setDescription("review")}>
            <h3> Reviews</h3>
          </button>
        </div>
        {description === "specification" ? (
          <Specification singleSpecification={props.description} />
        ) : (
          <div>
            {reviews.map((rev) => (
              <>
                {" "}
                <Review
                  email={rev.reviewedBy}
                  revi={rev.review}
                  rating={rev.rating}
                />
              </>
            ))}

            <div className="">
              <h4>Leave a review</h4>
              <form onSubmit={uploadReview}>
                <input
                  className="form-control form-control-md"
                  type="text"
                  value={addReview}
                  onChange={(e) => setAddReview(e.target.value)}
                />
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                />{" "}
                {value !== null && (
                  <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
                <br />
                <button className="btn btn-primary" type="submit">
                  submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <br />
      
        <h4>RELATED PRODUCTS</h4>
        <hr/>
        <Products/>
        
      
      <MobileHeader/>
    </div>
    </Container>
    <Container maxWidth="xl"><Footer /></Container>
    
    </React.Fragment>
  );
}

export default DetailedItem;
