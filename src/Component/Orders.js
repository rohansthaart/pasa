import React from "react";

function Orders() {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Orders#</th>
            <th scope="col">Date Purchased</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">34VB5540K83</th>
            <td>May 21, 2019</td>
            <td>In Progress</td>
            <td>Rs.358</td>
          </tr>
          <tr>
            <th scope="row">34VB5540K83</th>
            <td>May 21, 2019</td>
            <td>Canceled</td>
            <td>Rs.358</td>
          </tr>
          <tr>
            <th scope="row">34VB5540K83</th>
            <td>May 21, 2019</td>
            <td>Delivered</td>
            <td>Rs.358</td>
          </tr>
          <tr>
            <th scope="row">34VB5540K83</th>
            <td>May 21, 2019</td>
            <td>Delayed</td>
            <td>Rs.358</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
