import React from "react";
import figmaimg4 from "../assets/images/figmaimg4.jpeg";
import logo from "../assets/images/logo.png";
import "../index.css";

const Home = () => {
  return (
    <>
    {/* Header */}
      <div className="backimg w-full  p-4 h-[70vh] bg-cover bg-center font-mono text-white ">
        {/* NAVBAR */}
        <div className="flex justify-center ">
          <div className=" text-black  flex justify-around  p-2  bg-[#ffffff23] gap-5 rounded-2xl">
            <div className=" flex gap-2 font-bold">
              <img src={logo} alt="" width={"25px"} className="logo" />
              NexSphere
            </div>
            <div>
              <ul className="flex gap-4 ">
                <li>Home</li>
                <li>Chat</li>
              </ul>
            </div>
          </div>
        </div>
        {/* NAVBAR */}
        <div className="flex justify-center items-center my-10">
          <div className="flex flex-col justify-center items-center">
            <h3 className="bg-[#FFFFFF0A] text-white text-center inline p-2 rounded-[52px] border-[1px] border-[#FFFFFF14]">
              Introducing NexSphere
            </h3>
            <h1 className="text-[4rem] text-center font-bold">
              NEW LEVEL <br /> UNLOCKED
            </h1>
            <p className="text-center text-[#c7c3c3]">
              Turn Pro to harness the power of AI, make NexSphere your own <br />
              with custom themes, keep your Macs in sync and more.
            </p>
            <button
              className="my-8 p-[8px] rounded-[13px]"
              style={{
                background: "linear-gradient(180deg, #4478D7 0%, #166DC1 100%)",
                color: "white",
                boxShadow: "0px 4px 4px 0px #FFFFFF40"
                
                
              }}
              >
              Let's Get Started
            </button>
          </div>
        </div>
      </div>
      {/* Header */}
      {/* Features */}
      <div className="">

      </div>
      {/* Features */}
    </>
  );
};

export default Home;
