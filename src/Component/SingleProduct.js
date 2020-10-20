import React ,{useState,useContext,useEffect} from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Rating from '@material-ui/lab/Rating';
import "./SingleProduct.css";
import {Link} from "react-router-dom";
import {cartContext} from '../Context/useCart'
import CartItem from "./CartItem";

function SingleProduct(props) {
  const [value, setValue] = React.useState(0);
  const [cardItem,setCardItem]= useContext(cartContext);

  const name =props.name
  const title = name.substring(0,35);

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
          
          <ShoppingCartIcon fontSize="large" color="error"  onClick={addToCart}/>
        </div>
      </div>
      
        
        <Rating name="read-only half-rating" precision={0.5} value={props.rating} readOnly />
      
    </div>
  );
}

export default SingleProduct;
