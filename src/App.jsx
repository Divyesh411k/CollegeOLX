import React from "react";
//hello jatin
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { GoToTopButton } from "./components/GoToTopButton";
import { Header } from "./components/Header/Header";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { SingleProduct } from "./pages/SingleProduct";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {

  return (
    <div className="p-2 bg-blue-200">
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/singleProduct" element={<SingleProduct />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
        <div className="bottom-0 rounded-lg text-center w-full bg-blue">
          <GoToTopButton />

          <Footer />
        </div>
      </Router>

    </div>

  )
};

export default App;
