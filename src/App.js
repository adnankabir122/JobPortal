import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import NoPage from "./Components/NoPage/NoPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
