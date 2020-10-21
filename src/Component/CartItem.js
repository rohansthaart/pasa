import React, { useState, useContext } from "react";
import "./CartItem.css";
import { cartContext } from "../Context/useCart";

import DeleteIcon from "@material-ui/icons/Delete";

function CartItem(props) {
  const [cardItem, setCardItem] = useContext(cartContext);
  const titles = (props.title).substring(0,25);
  return (
    <tbody>
      <tr>
        <th scope="row">
          <img className="product-image" src={props.url} />
        </th>

        <td colspan="5">
          <em>{titles}...</em><br/>
          <p>{props.quantity} x Rs.{props.price}</p>
        </td>
       
        <td>
          <button className="delete">
            <DeleteIcon
              onClick={() => {
                const virtualCart = [...cardItem];
                const removedItem = virtualCart.splice(props.index, 1);
                console.log(removedItem);
                const newCart = cardItem.filter(
                  (item) => item.img !== removedItem[0].img
                );
                setCardItem(newCart);
              }}
            />
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default CartItem;
