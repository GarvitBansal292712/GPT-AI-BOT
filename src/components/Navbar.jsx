import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed text-white m-2 flex justify-between w-full p-4 backdrop-blur-2xl rounded-2xl border-2 border-[#ffffff87]">
        <div>Logo</div>
        <div >
          <ul className="flex gap-4 ">
            <li>Home</li>
            <li>Chat</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
