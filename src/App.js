import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Components/Home/Home";
import NoPage from "./Components/NoPage/NoPage";
import Register from "./Components/Register/Register";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="jobs" element={<About/>} />
          <Route path="candidates" element={<About/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<ContactUs/>} />
          
          <Route path="register" element={<Register/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
