import React ,{useState,useContext} from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Rating from '@material-ui/lab/Rating';
import "./SingleProduct.css";
import {Link} from "react-router-dom";
import {cartContext} from '../Context/useCart'

function SingleProduct(props) {
  const [value, setValue] = React.useState(0);
  const [cardItem,setCardItem]= useContext(cartContext);
  const name =props.name
  const title = name.substring(0,35);
  return (
    <div className="card single-card" style={{ width: "180px", height: "310px" }}>
      <Link to={`/product/${props.id}`}><img
        src={props.url}
        style={{ objectFit: "cover", height: "177px", width: "177px" }}
      /></Link>
      <div>
        <h7 style={{ marginLeft: "6px", textAlign: "left" }}>{title}...</h7>
      </div>
      <div className="row">
        <div
          className="price col"
          style={{ marginLeft: "6px", textAlign: "left" }}
        >
          <h6>Rs.{props.price}</h6>

          <h7> {props.discount}</h7>
        </div>
        <div className="col-4">
          
          <ShoppingCartIcon fontSize="large" color="error"  onClick={e=>setCardItem(prev=>[...prev,{img:props.url,descripton:props.name,price:props.price,quantity:1}])}/>
        </div>
      </div>
      
        
        <Rating name="read-only" value={value} readOnly />
      
    </div>
  );
}

export default SingleProduct;
