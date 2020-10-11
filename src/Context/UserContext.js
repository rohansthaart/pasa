import React, { useState, useEffect, useContext } from "react";
const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }) {
  const [isSessionAvailable, setIsSessionAvailable] = useState(false);
  const [user, setUser] = useState();
  useEffect(() => {
    fetch("/user/isAuthenticated")
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          setUser(result.user);
          setIsSessionAvailable(true);
        } else {
          setUser(result.user);
          setIsSessionAvailable(false);
        }
      })
      .catch((err) => console.log(user));
  }, [isSessionAvailable]);
  const value = {
    user,
    isSessionAvailable,
    setIsSessionAvailable,
    setUser,
  };
  console.log(value);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
