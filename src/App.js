import React from "react";
import MainComponent from "./Component/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
