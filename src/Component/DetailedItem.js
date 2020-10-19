import React, { useState } from "react";

import axios from 'axios'
import "./DetailedItem.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IndeterminateCheckBoxOutlinedIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';
import {useParams} from 'react-router-dom'
import {useProduct} from '../Context/ProductContext'
import Specification from "./Specification";
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import Footer from "./Footer"
import Review from "./Review";



function DetailedItem(props) {
 
 const [addReview,setAddReview]= useState('');
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const {products} = useProduct();
  const {id} = useParams();
  const selectedProduct = products.filter(product => (product._id === id))[0];
  const [selectedImage,setSelectedImage]=useState(selectedProduct.image[0]);
  const detail = (props.description).substring(0,485);
  const [count, setCount] = useState(1);
  const [description, setDescription] = useState("specification");
  
  const reviews = props.review;
  
  const uploadReview = (e) => {
    
    fetch(`/products/${id}/addReview`,{
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
      },
  
    body: JSON.stringify({
     review: addReview,
     rating :value,
    
     
    })
  
    });  

setAddReview('')
e.preventDefault()
  }

  const reviewer = reviews.length;
  const arrayRating = reviews.map(rev=>rev.rating)
  const sumRating =  arrayRating.reduce((a, b) => a + b, 0)
  const avgRating = (sumRating/reviewer).toFixed(1);
  

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  return (
    <div className="detail-specification container">
      <div className="row">
        
        {/*main image*/}
        <div className=" col-md-7 col-lg-8">
          <div>
          <div id="myCarouselArticle" class="carousel " data-ride="false">
            <div style={{ padding: "0px" }}>
            
            
              <div class="carousel-item active">
                <img
                  className="slide-image "
                  src={selectedImage}
                  alt="Card image cap"
                  title=""
                />
              </div>
              
            </div>
          </div>
          </div>
          <div className="">
          <div id="slider-thumbs " style={{marginTop:'5px'}}>
            <ul class="reset-ul" style={{marginLeft:'55px'}} >
           
              {selectedProduct.image.map(product=><li className="" style={{display:'inline', marginLeft:'5px'}}>
                <a data-target="#myCarouselArticle" data-slide-to={'{0++}'}>
                  <img
                    class="img-fluid fit-image"
                    src={product}
                    onClick={()=>setSelectedImage(product)}
                  />
                </a>
              </li>  )}
            </ul>
          </div>
        </div>

        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-4 card">
          <div className="product_title">
            <h3>
              {props.name}
            </h3>
          </div>
          {/*Revie*/}
          <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Review ({reviewer})</Typography>
        <Rating
          name="half-rating-read"
          value={avgRating}
          readOnly
          precision={0.1}
          
        /> </Box>
          <div className="brand-name">Brand:</div>
          <br/>
          <div className="small-description">
           {detail}...
          </div>
          <div className="Price">
            <h3>Rs.{props.price}</h3>

            <h4>
              <span className="discount">Rs.2000 </span> -{props.discount}
            </h4>
            <h4>6 stocks remaining</h4>
          </div>
          <div className="quantity mt-4">
            Quantity:{" "}
            <button
              className="btn "
              onClick={() => setCount(count - 1)}
              disabled={count < 1 ? true : false}
            >
              <IndeterminateCheckBoxOutlinedIcon />
            </button>
            <strong>{count}</strong>
            <button className="btn " onClick={() => setCount(count + 1)}>
              <AddBoxOutlinedIcon />
            </button>
          </div>
        </div>
       
        <div className="col-12 card">
          <div>
            <h3> Total: Rs.{count * props.price}</h3>
            Delevery Options <br />
           <LocationOnOutlinedIcon/>Bagmati,kathmandu Metro 22- Newroad Area,Newroad 
            <a href=""> CHANGE</a>
            <div className="row">
              <div className="delevery-time col-6">
                <HomeWorkOutlinedIcon/>Home Delevery
              </div>
              <div className="col-2 delevery-charge">
                Free
              </div>
              <div className="col-4 delevery-charge">
              2-5 days<br/>
              
              </div>
              <div className='col'><MoneyOutlinedIcon/> on Delivery Available</div>
            </div>
            <div className="row">
            <div className='col'>
            <VerifiedUserOutlinedIcon/>Return and Warranty </div>
            <div className='col'>7 days returns </div>
            </div><hr/>
              change of mind is not applicable
              <br />1 Year Local saller warrenty<hr/>
            
            <div className="saler row">
              <div className="col-8">
                Sold by
                <h4>{props.seller}</h4>
              </div>
              <div className="col-4">Chat Now</div>
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
            <div className="row ">
              <div className="col">
                <h7> Positive Seller Ratings</h7> <br />
                <h3>76%</h3>
              </div>
              <div className="col">
                <h7>Ship on Time</h7>
                <br/>
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
     
      <div className="review-specification">
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
          <Specification
            singleSpecification={props.description}
          
          />
        ) : (
         <div>
           {reviews.map(rev=> <> <Review
               email={rev.reviewedBy}
               revi={rev.review}
               rating={rev.rating}
               
             />
            
            
             </>
           )}
          
              <div>
                <h4>Leave a review</h4>
                <form onSubmit={(e)=> uploadReview()}>
             <input className='form-control form-control-md' type='text' onChange={(e)=>setAddReview(e.target.value)}/>
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
        /> {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
        <br/>
             <button className='btn btn-primary' type='submit'>submit</button>
             </form>
             </div>
                </div>
          
        )}
      </div>
      <br/>
      <Footer/>
    </div>
  );
}

export default DetailedItem;
