import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import Account from "./AccountComponent";
import Shop from "./ShopComponent";
import UserVerificationScreen from "./UserVerificationScreen";
import Profile from "./ProfileComponent";
import Loader from "./Loader";
import SellerEntry from "./SellerComponent/SellerEntry";
import SellerVerification from "./SellerComponent/SellerVerificationScreen";
import PrivateSellerRoute from "./SellerComponent/PrivateSellerComponent";
import PrivateUserRoute from "./PrivateUserRoute";
import "./Main.css";
import { useProduct } from "../Context/ProductContext";
import DetailedItem from "./DetailedItem";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import DetailedSingleProduct from "./detailedSingleProduct";
import QueryProducts from "./QueryProducts";
import TermsCon from "./Terms&Con";
import CheckOut from "./Checkout";
export default function MainComponent(props) {
  const products = useProduct().products;
  console.log(products);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Switch location={props.location}>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <PrivateUserRoute path="/account" component={Account} />
          <Route path="/shop" component={Shop} />
          <Route path="/user-verify" component={UserVerificationScreen} />
          <Route path="/seller-verify" component={SellerVerification} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" exact component={DetailedSingleProduct} />
          <PrivateSellerRoute path="/merchant" exact component={SellerEntry} />
          <Route path="/checkout" component={CheckOut} />
          <Route path="/termsandconditions" component={TermsCon} />
          <Route
            path="/category/:categoryName"
            exact
            component={QueryProducts}
          />
        </Switch>
      </div>
    );
  }
}
