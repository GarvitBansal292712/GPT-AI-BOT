import '../index.css' // Add this line
import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/images/logo.png"
const Navbar = () => {
  return (
    <>
        {/* NAVBAR */}
        <div className="flex justify-center font-mono ">

        <div className="flex justify-center fixed top-2">
          <div className=" text-black  flex justify-around  p-2  bg-[#ffffff] gap-5 rounded-2xl">{/* bg-[#ff */}{/* ffff23] */}
            <div className=" flex gap-2 font-bold">
              <img src={logo} alt="" width={"25px"} className="logo invert" />
              NexSphere
            </div>
            <div>
              <ul className="flex gap-4 ">
                <Link to="/">
                <li>Home</li>
                
                </Link>
                <Link to="/chat">
                <li>Chat</li>
                
                </Link>
              </ul>
            </div>
          </div>
        </div>
        </div>
        {/* NAVBAR */}
    </>
  );
};

export default Navbar;
