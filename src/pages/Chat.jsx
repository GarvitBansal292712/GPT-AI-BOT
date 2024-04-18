import React from "react";
import logo from "../assets/images/logo.png";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "../index.css";
// import Nex from "/Users/garvi/Projects/AI API CHAT BOT PROJECT/public/Nex"
const Chat = () => {
  return (
    <>
      {/* NAVBAR */}
      <div className="flex justify-center my-2 font-mono">
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
      {/* 3d model */}
      {/* <Canvas>
        <Suspense fallback={null}>
          <Nex />
        </Suspense>
      </Canvas> */}
      {/* 3d model */}
      {/* Chat */}
      <div className="flex justify-center items-center flex-col text-white font-mono  mt-[200px]">
            <img src={logo} alt="" width={"100px"} className="logo" />

            <h1 className="text-center m-2">
            Hey! I am NexSphere, your AI assistant. How can I help you today?
            </h1>
            {/* CHAT IS GOING TO START FROM HERE AI CHAT */}
            <div className="bg-[#FFFFFF0A] flex flex-col p-3 rounded-xl m-5 border-[1px] border-[#FFFFFF14] w-[90%]">
                <div className="flex gap-3 items-center">
                    <img src={logo} alt="" width={"25px"} className="" />
                    <p>NexSphere</p>
                </div>
                <div>
                    <p className="ml-[36px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates reprehenderit.
                    </p>
                </div>
            </div>
            {/* CHAT IS GOING TO START FROM HERE HUMAN CHAT */}
            <div className="bg-[#ffffffc5] text-black flex flex-col p-3 rounded-xl mx-5 mt-5 mb-2 border-[1px] border-[#FFFFFF14] w-[90%]">
                <div className="flex gap-3 items-center">
                    <img src={logo} alt="" width={"25px"} className="" />
                    <p>You</p>
                </div>
                <div>
                    <p className="ml-[36px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates reprehenderit, nulla autem deserunt beatae velit earum
                    eius cupiditate non voluptatem.
                    </p>
                </div>
            </div>
            {/* Input  */}
            <div className="w-full">
                <input type="text" name="" id="" className="flex bg-[#FFFFFF0A] p-4 rounded-xl relative bottom-0 justify-center w-[90%] items-center" />
            </div>
      </div>
      {/* Chat */}
    </>
  );
};

export default Chat;
