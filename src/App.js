import React from "react";
import MainComponent from "./Component/MainComponent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
