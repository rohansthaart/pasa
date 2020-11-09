import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import SingleProduct from "./SingleProduct";
import "./QueryProduct.css";
import MobileHeader from './MobileHeader'
export default function SubcategoryQurey() {
  const { name } = useParams();
  const { products } = useProduct();
  const queryProduct = products.filter(
    (product) => product.subSubCategory === name
  );
  console.log(queryProduct);
  return (
    <div className="">
      <div className="queryTitle">
        <h4 className="queryHeader">{name}</h4>
      </div>
      {queryProduct.length === 0 ? (
        <div>
          <h4 style={{ color: "red" }}>
            Currently, there are no any products related to this category!
          </h4>
        </div>
      ) : (
        <div className="row">
          {queryProduct.map((product) => {
            const rating = product.review.map((r) => r.rating);
            var sum = 0;
            for (let i = 0; i < rating.length; i++) {
              sum = sum + rating[i];
            }
            var avgRating = sum / rating.length;
            console.log("AVG Rating", avgRating);
            return (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 ">
                <SingleProduct
                  id={product._id}
                  name={product.name}
                  price={product.unitPrice}
                  url={product.image[0]}
                  discount={product.discount}
                  rating={avgRating}
                  width="auto"
                  height="auto"
                />
              </div>
            );
          })}
        </div>
      )}
      <MobileHeader/>
    </div>
  );
}
