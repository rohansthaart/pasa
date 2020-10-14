import React,{useContext,useState} from "react";
import SingleProduct from "./SingleProduct";
import {useProduct} from '../Context/ProductContext'

function Products() {
  const products = useProduct().products
  

  return (
    <div className="container">
      <div className="row">
          {products.map(product=>  
          <div className="col">
          <SingleProduct
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
