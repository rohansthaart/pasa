import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
function Checkout() {
  return (
    <ul class="list-group list-group-horizontal-sm list-group-flush">
      <li class="list-group-item">
        <img
          className="product-image"
          src="https://s.cdpn.io/3/dingo-dog-bones.jpg"
        />
      </li>
      <li class="list-group-item">Dingo dog bone </li>
      <li class="list-group-item">3</li>
      <li class="list-group-item">Rs.50</li>
      <li class="list-group-item">Rs.{3 * 50}</li>
      <li class="list-group-item">
        <button className="delete">
          <DeleteIcon />
        </button>
      </li>
    </ul>
  );
}

export default Checkout;
