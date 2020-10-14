import React from "react";
import MainComponent from "./Component/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";
import { CartProvider } from "./Context/useCart";
import { ProductProvider } from "./Context/ProductContext";
import detailedSingleProduct from "./Component/detailedSingleProduct";

function App() {
  return (
    <UserProvider>
      <ProductProvider>
        <BrowserRouter>
          <CartProvider>
            
            <MainComponent />
          </CartProvider>
        </BrowserRouter>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
