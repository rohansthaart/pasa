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
  const newArrivalProducts = products ? [...products].reverse() : [];
  const dealsOfWeek = products
    ? [...products]
        .sort((p1, p2) => parseInt(p1.discount) - parseInt(p2.discount))
        .reverse()
    : [];

  const topReviewProducts = products
    ? [...products]
        .sort((p1, p2) => p1.review.length - p2.review.length)
        .reverse()
    : [];

  const value = {
    products,
    setProducts,
    setChanged,
    changed,
    topReviewProducts,
    dealsOfWeek,
    newArrivalProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
