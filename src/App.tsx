import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/layouts/footer/footer";
import Header from "./components/layouts/header/header";
import ProductDetail from "./pages/product-detail/product-detail";
import Cart from "./pages/cart/cart";
import Home from "./pages/home/home";
import Product from "./pages/product/product";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:category" element={<Product />} />
            <Route path="/product/:category/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
