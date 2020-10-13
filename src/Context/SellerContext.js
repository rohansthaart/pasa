import React, { useState, useEffect, useContext } from "react";
const SellerContext = React.createContext();

export const useSeller = () => {
  return useContext(SellerContext);
};

export function SellerProvider({ children }) {
  const [isSessionAvailable, setIsSessionAvailable] = useState(false);
  const [seller, setSeller] = useState();
  useEffect(() => {
    fetch("/user/isAuthenticated")
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          setSeller(result.user);
          setIsSessionAvailable(true);
        } else {
          setSeller(result.user);
          setIsSessionAvailable(false);
        }
      })
      .catch((err) => console.log(err));
  }, [isSessionAvailable]);
  const value = {
    seller,
    isSessionAvailable,
    setIsSessionAvailable,
    setSeller,
  };
  console.log(value);
  return (
    <SellerContext.Provider value={value}>{children}</SellerContext.Provider>
  );
}
