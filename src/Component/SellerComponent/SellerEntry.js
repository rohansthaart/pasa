import React from "react";
import SellerProfile from "./SellerProfile";
import SellerProducts from "./SellerProducts";
import SellerOrders from "./SellerOrderHistory";

import "./SideBar.css";

export default function VerticalTabs() {
  return (
    <div className="row ">
      <br />
      <div className="col-3 sideTab">
        {/* <div className="center">
          <AvatarLogin />
        </div>
        <div className="align-text-center">Hello Sushan Shakya</div>
        <br />
        <div></div> */}
        <div
          className="nav  flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link active"
            id="v-pills-profile-tab"
            data-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="true"
          >
            Profile
          </a>
          <a
            className="nav-link"
            id="v-pills-product-tab"
            data-toggle="pill"
            href="#v-pills-product"
            role="tab"
            aria-controls="v-pills-product"
            aria-selected="false"
          >
            Products
          </a>
          <a
            className="nav-link"
            id="v-pills-order-tab"
            data-toggle="pill"
            href="#v-pills-order"
            role="tab"
            aria-controls="v-pills-order"
            aria-selected="false"
          >
            Order History
          </a>
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <SellerProfile />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-product"
            role="tabpanel"
            aria-labelledby="v-pills-product-tab"
          >
            <SellerProducts />
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-order"
            role="tabpanel"
            aria-labelledby="v-pills-order-tab"
          >
            <SellerOrders />
          </div>
        </div>
      </div>
    </div>
  );
}
