import React, { useState } from "react";
import ProductTable from "./ProductTable";
import { Paper } from "@material-ui/core";
import CreateProduct from "./CreateProductModal";
import { Button } from "react-bootstrap";
import { useProduct } from "../../Context/ProductContext";
import { useUser } from "../../Context/UserContext";

export default function SellerProducts() {
  const { user } = useUser();
  const { products } = useProduct();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const userProducts = products.filter((product) => {
    if (user) {
      return product.postedBy._id === user._id;
    }
  });

  return (
    <div>
      <Paper className="product-container">
        <h1 className="product-header">Your Products</h1>
        <h4>Total {userProducts.length}</h4>
        <Button onClick={openModal}>Create Product</Button>
        <div className="product-table">
          {userProducts.length !== 0 && (
            <ProductTable products={userProducts} />
          )}
          {userProducts.length === 0 && (
            <h1>You have no any products posted yet!</h1>
          )}
        </div>
      </Paper>
      <CreateProduct
        modalVisible={modalVisible}
        openModal={openModal}
        closeModal={closeModal}
      />
    </div>
  );
}
