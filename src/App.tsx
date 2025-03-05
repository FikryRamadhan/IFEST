import { useState } from "react";
import { CartProvider } from "./hooks/cartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ChatbotButton from "./component/ModalChat";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop-fashion" element={<Shop />} />
          <Route path="/shop-fashion/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </CartProvider>
        <ChatbotButton />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
