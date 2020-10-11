import React from "react";
import MainComponent from "./Component/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";
import { CartProvider } from "./Context/useCart";

function App() {
  return (
   
    <UserProvider>
      <BrowserRouter>
      <CartProvider >
        <MainComponent />
        </CartProvider>
      </BrowserRouter>
    </UserProvider>
    
  );
}

export default App;
