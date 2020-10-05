import React from "react";
import "./CartItem.css";

import DeleteIcon from "@material-ui/icons/Delete";
function CartItem(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">
          <img className="product-image" src={props.url} />
        </th>

        <td>
          <em>{props.title}</em>
        </td>
        <td>
          {props.quantity} x Rs.{props.price}
        </td>
        <td>
          <button className="delete">
            <DeleteIcon />
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default CartItem;
