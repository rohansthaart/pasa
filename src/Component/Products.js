import React,{useContext,useState} from "react";
import SingleProduct from "./SingleProduct";
import {useProduct} from '../Context/ProductContext'

function Products() {
  const products = useProduct().products
  

  return (
    <div className="container">
      <div className="row mb-4">
          {products.map(product=>  
          <div className="col-lg-2 col-md-3 col-sm-4 col-6">
          <SingleProduct
            id={product._id}
            name={product.name}
            price={product.unitPrice}
            url={product.image[1]}
            discount = {product.discount}
          /> 
          </div>
          )}
      </div>
    </div>
  );
}

export default Products;
