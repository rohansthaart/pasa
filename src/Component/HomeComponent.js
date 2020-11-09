import React, { useState, useContext, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SingleProduct from "./SingleProduct";
import Products from "./Products";
import MobileHeader from "./MobileHeader";
import TopCarousel from "./TopCarousel";
import Footer from "./Footer";
import Test from "./test";
import Test3 from "./test3";
import Test2 from "./test2";
import { useProduct } from "../Context/ProductContext";
import { Button } from "@material-ui/core";

export default function HomeComponent() {
  const {
    products,
    topReviewProducts,
    newArrivalProducts,
    dealsOfWeek,
  } = useProduct();
  const dealsOfWeekProducts = products
    ? products
        .sort((p1, p2) => parseInt(p1.discount) - parseInt(p2.discount))
        .reverse()
    : [];
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={2} xl={2}>
            <Test />
            <br />
            <br />
            <div>
              <div style={{ backgroundColor: "#070d59", color: "white" }}>
                <h4>TOP REVIEWS</h4>
                <hr />
              </div>

              <div
                className=""
                style={{
                  position: "unset",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="row">
                  {[...topReviewProducts].splice(0, 6).map((product) => {
                    const rating = product.review.map((r) => r.rating);
                    var sum = 0;
                    for (let i = 0; i < rating.length; i++) {
                      sum = sum + rating[i];
                    }
                    var avgRating = sum / rating.length;
                    console.log("AVG Rating", avgRating);
                    return (
                      <div className="col-lg-6 col-md-3 col-sm-4 col-6 ">
                        <SingleProduct
                          id={product._id}
                          name={product.name}
                          price={product.unitPrice}
                          url={product.image[0]}
                          discount={product.discount}
                          rating={avgRating}
                          width="auto"
                          height="100%"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Grid>

          <Grid item lg={10} xl={9} xs={12}>
            <TopCarousel />
            <br />

            <Test3 />
            <br />
            <Test2 />
            <br />
            <br />
            <div>
              <h4>
                <LocalOfferIcon />
                DEALS OF THE WEEKS
              </h4>
              <hr />
            </div>
            <Products products={[...dealsOfWeek].splice(0, 6)} />
            <Button style={{ float: "right" }} color="secondary">
              See More
            </Button>
            <br />
            <br />
            <div>
              <h4>
                <LocalOfferIcon />
                BEST SELLERS
              </h4>
              <hr />
            </div>
            <Products />

            <br />
            <br />
            <div>
              <h4>
                <LocalOfferIcon />
                NEW ARRIVALS
              </h4>
              <hr />
            </div>
            <Products products={[...newArrivalProducts].splice(0, 6)} />

            <Button style={{ float: "right" }} color="secondary">
              See More
            </Button>
            <br />

            <br />
          </Grid>
        </Grid>

        <Footer />
        <MobileHeader />
      </Container>
    </React.Fragment>
  );
}
