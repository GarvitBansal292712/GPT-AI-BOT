import React from "react";
import logo from "../assets/images/logo.png";
import "../index.css";
import { IoSend } from "react-icons/io5";
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Nex from "/Users/garvi/Projects/AI API CHAT BOT PROJECT/public/Nex"
const Chat = () => {
  return (
    <>
      {/* 3d model */}
      {/* <Canvas>
        <Suspense fallback={null}>
          <Nex />
        </Suspense>
      </Canvas> */}
      {/* 3d model */}
      {/* Chat */}
      <div className="flex justify-center items-center flex-col text-white font-mono  mt-[200px]">
        <img src={logo} alt="" width={"100px"} className="logo mb-[50px] -z-10" />
        <div className="flex justify-center flex-col items-center mb-[90px] -z-10">
          {/* CHAT IS GOING TO START FROM HERE AI CHAT */}
          <div className="bg-[#FFFFFF0A] flex flex-col p-3 rounded-xl m-5 border-[1px] border-[#FFFFFF14] w-[70%] ">
            <div className="flex gap-3 items-center">
              <img src={logo} alt="" width={"25px"} className="" />
              <p>NexSphere</p>
            </div>
            <div>
              <p className="ml-[36px]">
                Hey! I am NexSphere, your AI assistant. How can I help you
                today?
              </p>
            </div>
          </div>
          {/* CHAT IS GOING TO START FROM HERE HUMAN CHAT */}
          <div className="bg-[#ffffffc5] text-black flex flex-col p-3 rounded-xl mx-5 mt-5 mb-2 border-[1px] border-[#FFFFFF14] w-[70%] ">
            <div className="flex gap-3 items-center">
              <img src={logo} alt="" width={"25px"} className="" />
              <p>You</p>
            </div>
            <div>
              <p className="ml-[36px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates reprehenderit, nulla autem deserunt beatae velit
                earum eius cupiditate non voluptatem.
              </p>
            </div>
          </div>


        </div>

        {/* Input  */}
        <div className="w-full flex justify-center mt-14  items-center fixed bottom-[2px] z-10">
          <input
            type="text"
            name=""
            id=""
            placeholder="Message NexSphere..."
            className="flex bg-[#000712] border-[2px] border-white p-4 rounded-xl  justify-center w-[91%] items-center"
          />
          <button type="submit" className="absolute right-[100px] ">
            <IoSend />
          </button>
        </div>
      </div>
      {/* Chat */}
    </>
  );
};

export default Chat;
