import { useState } from "react";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ChatbotButton from "./component/ModalChat";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop-fashion" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatbotButton />
      </Router>
    </>
  );
}

export default App;
