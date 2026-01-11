import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error/>} />          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
