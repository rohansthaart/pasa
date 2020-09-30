import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import Account from "./AccountComponent";
import Shop from "./ShopComponent";

export default function MainComponent(props) {
  return (
    <div>
      <Header />
      <Switch location={props.location}>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/account" component={Account} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}
