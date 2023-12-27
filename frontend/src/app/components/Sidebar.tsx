"use client";

import React from "react";
import { useState } from "react";

// Icons
import { MdArrowCircleLeft } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-indigo-950 h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } relative duration-300`}
      >
        <MdArrowCircleLeft
          className={`text-indigo-500 text-3xl rounded-full absolute -right-3 top-9 border border-indigo-500 cursor-pointer transform transition duration-300 hover:text-white hover:border-white ${
            open ? "rotate-0" : "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />{" "}
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;
