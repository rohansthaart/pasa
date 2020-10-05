import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import Products from "./Products";
import TopCarousel from "./TopCarousel";
export default function HomeComponent() {
  return (
    <div>
      <TopCarousel />
      <Products />
    </div>
  );
}
