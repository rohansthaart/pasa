import React,{useContext,useState} from "react";
import SingleProduct from "./SingleProduct";
import {useProduct} from '../Context/ProductContext'

function Products() {
  const products = useProduct().products;
  

  return (
    <div className="container">
      <div className="row mb-4">
          {products.map(product=>  
          {
            const rating = product.review.map(r => r.rating);
            var sum = 0;
            for(let i=0;i<rating.length;i++){
              sum = sum + rating[i];
            }
          var avgRating = sum / rating.length;
            console.log("AVG Rating",avgRating);
            return(
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            
          <SingleProduct
            id={product._id}
            name={product.name}
            price={product.unitPrice}
            url={product.image[0]}
            discount = {product.discount}
            rating = {avgRating}
            
          /> 
          </div>
            )
          }
          
          )}
      </div>
    </div>
  );
}

export default Products;
