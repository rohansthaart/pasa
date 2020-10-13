import React from "react";

export default function OrderTable() {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.N.</th>
            <th scope="col">Product Name</th>
            <th scope="col">Qty.</th>
            <th scope="col">Total Price</th>
            <th scope="col">Ordered By</th>
            <th scope="col">Shipping Address</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Laptop</td>
            <td>1</td>
            <td>70000</td>
            <td>Sushan Shakya</td>
            <td>Patan</td>
            <td>Pending</td>
            <td>
              <button className="btn btn-secondary">Update Status</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
