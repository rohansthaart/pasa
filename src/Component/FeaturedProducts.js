import React from "react";
import Products from "./Products";
import { useProduct } from "../Context/ProductContext";

import { useParams } from "react-router-dom";

export default function FeaturedProducts() {
  const { topReviewProducts, dealsOfWeek, newArrivalProducts } = useProduct();
  const { feature } = useParams();

  return (
    <>
      <div className="queryTitle">
        <h4 className="queryHeader">{feature}</h4>
      </div>
      <div style={{ padding: 10 }}>
        {feature === "Deals-of-Week" ? (
          <Products products={[...dealsOfWeek].splice(0, 12)} />
        ) : feature === "Top-Review-Products" ? (
          <Products products={[...topReviewProducts].splice(0, 12)} />
        ) : (
          <Products products={[...newArrivalProducts].splice(0, 12)} />
        )}
      </div>
    </>
  );
}
