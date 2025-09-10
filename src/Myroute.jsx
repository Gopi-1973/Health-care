import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Booking from "./Pages/Booking";
import Services from "./Pages/Services";

const Myroute = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route  path="/booking" element={<Booking/>}/>
            <Route  path="/services" element={<Services/>}/>

            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Myroute;
