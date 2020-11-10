import React from "react";
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
import { useHistory } from "react-router-dom";
import Test4 from "./test4";


export default function HomeComponent() {
  const {
    products,
    topReviewProducts,
    newArrivalProducts,
    dealsOfWeek,
  } = useProduct();
  const history = useHistory();
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
                  {[...topReviewProducts].splice(0, 4).map((product) => {
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
                <br />
                <Button
                  style={{ float: "right" }}
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    history.push("/products/featured/Top-Review-Products")
                  }
                >
                  See more
                </Button>
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
            <br/>
            <br/>
            <div>
              <h4>
                <LocalOfferIcon />
                DEALS OF WEEKS<Button
              style={{ float: "right" }}
              color="secondary"
              onClick={() => history.push("/products/featured/Deals-of-Week")}
            >
              See More
            </Button>
              </h4>
              <hr />
            </div>
            <Products products={[...dealsOfWeek].splice(0, 6)} />
            
            <br />
            <br />
            
            

            <br />
            <br />
            <div>
              <h4>
                <LocalOfferIcon />
                NEW ARRIVALS <Button
              style={{ float: "right" }}
              color="secondary"
              onClick={() => history.push("/products/featured/New-Arrival")}
            >
              See More
            </Button>
              </h4>
              <hr />
            </div>
            <Products products={[...newArrivalProducts].splice(0, 6)} />

           
            <br />

            <br />
          </Grid>
        </Grid>
                 <Test4/>
        <Footer />
        <MobileHeader />
      </Container>
    </React.Fragment>
  );
}
