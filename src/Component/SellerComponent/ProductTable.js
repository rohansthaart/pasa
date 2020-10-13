import React from "react";
import { useProduct } from "../../Context/ProductContext";
import axios from "axios";

export default function ProductTable({ products }) {
  const { setChanged } = useProduct();
  const deleteProduct = (id) => {
    axios
      .delete("/products/" + id)
      .then((res) => setChanged(true))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.N.</th>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Sub-Category</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={product.image} width={100} height={100} alt="image" />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.subCategory}</td>
              <td>{product.unitPrice}</td>
              <td>{product.discount}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
