import React, { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  
  return (
    <nav className="bg-blue-300 text-white  flex justify-between items-center p-4">
      <div className=" text-2xl mx-5 font-bold ">Healthcare</div>
      {/* Dekstop menu */}
      <ul className=" md:flex gap-10 mx-30">
        <li>
          <Link to={"/"} className=" font-bold  text-xl hover:text-yellow-400 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} className=" font-bold  text-xl hover:text-yellow-400 hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to={"/services"} className=" font-bold  text-xl hover:text-yellow-400 hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link to={"/booking"} className=" font-bold  text-xl hover:text-yellow-400 hover:underline">
            Booking
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className=" font-bold  text-xl hover:text-yellow-400 hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    
            
          
          

        
          
      
    
    </nav>
  );
};

export default Navbar;
