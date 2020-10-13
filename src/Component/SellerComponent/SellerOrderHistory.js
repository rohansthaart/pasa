import React from "react";
import OrderTable from "./OrderTable";
import { Paper } from "@material-ui/core";

export default function SellerOrderHistory() {
  return (
    <div>
      <Paper className="product-container">
        <h1 className="product-header">Your Products</h1>
        <h4>Total 10</h4>
        <div className="product-table">
          <OrderTable />
        </div>
      </Paper>
    </div>
  );
}
