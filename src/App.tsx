import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/layouts/footer/footer";
import Header from "./components/layouts/header/header";
import Home from "./pages/home/home";
import Product from "./pages/product/product";

function App() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
