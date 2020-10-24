import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import Products from "./Products";
import MobileHeader from "./MobileHeader"
import TopCarousel from "./TopCarousel";
import Footer from "./Footer"
export default function HomeComponent() {
  return (
    <div className='justify-content-center'>
     
      <TopCarousel />
   
      <br/>
      <Products />
      <Footer/> 
      <MobileHeader/>
    </div>
  );
}
