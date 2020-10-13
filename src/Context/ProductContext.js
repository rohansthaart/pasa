import React, { useState, useEffect, useContext } from "react";

const ProductContext = React.createContext();

export const useProduct = () => {
  return useContext(ProductContext);
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [changed, setChanged] = useState(false);
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((result) => setProducts(result.product))
      .catch((err) => console.log(err));
  }, [changed]);
  const value = {
    products,
    setProducts,
    setChanged,
    changed,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
