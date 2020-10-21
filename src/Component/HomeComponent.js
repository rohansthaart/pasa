import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import Products from "./Products";

import TopCarousel from "./TopCarousel";
import Footer from "./Footer"
export default function HomeComponent() {
  return (
    <div className='container-fluid'>
     
        <div className='col'>
      <TopCarousel />
     
      </div>
      <br/>
      <Products />
      //See what's selling

      //Weekly Picks: Home decor
      //
      <Footer/> 
    </div>
  );
}
