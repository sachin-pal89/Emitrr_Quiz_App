import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Authentication from "./pages/Authentication/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Authentication />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
