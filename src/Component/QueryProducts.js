import React from "react";
import SingleProduct from "./SingleProduct";
import { useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";

export default function QueryPeoducts() {
  const { products } = useProduct();
  const { categoryName } = useParams();
  const searchedProducts = products.filter((p) => p.category === categoryName);
  console.log(searchedProducts);
  return (
    <div className="container">
      <h1 style={{ color: "green" }}>
        <u>{categoryName}</u>
      </h1>
      {searchedProducts.length === 0 ? (
        <div>
          <h4 style={{ color: "red" }}>
            Currently, there are no any products related to this category!
          </h4>
        </div>
      ) : (
        <div className="row">
          {searchedProducts.map((product) => {
            const rating = product.review.map((r) => r.rating);
            var sum = 0;
            for (let i = 0; i < rating.length; i++) {
              sum = sum + rating[i];
            }
            var avgRating = sum / rating.length;
            console.log("AVG Rating", avgRating);
            return (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                <SingleProduct
                  id={product._id}
                  name={product.name}
                  price={product.unitPrice}
                  url={product.image[0]}
                  discount={product.discount}
                  rating={avgRating}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
