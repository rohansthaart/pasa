import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';

import SingleProduct from "./SingleProduct";
import Products from "./Products";
import MobileHeader from "./MobileHeader"
import TopCarousel from "./TopCarousel";
import Footer from "./Footer"
import Test from './test'
import Test2 from './test2'
export default function HomeComponent() {
  return (
    <React.Fragment>
      <CssBaseline />
      
    <Container maxWidth="xl">
       
        <Grid container spacing={2}>
        <Grid item lg={2} xl={3}>
        <Test/></Grid>
        <Grid item lg={10} xl={9} xs={12}><TopCarousel /><br/>
        <Products />
        </Grid>
        </Grid> 
        
        
        
        <Footer/> 
        <MobileHeader/>
        </Container>
    </React.Fragment>
      
    );
    
}
