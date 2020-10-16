import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import Products from "./Products";
import TopCarousel from "./TopCarousel";
import Footer from "./footer"
export default function HomeComponent() {
  return (
    <div>
      <TopCarousel />
      <br/>
      <Products />
      
      <Footer/> 
    </div>
  );
}
