"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

// Icons
import { MdArrowCircleLeft } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-neutral-950 h-screen p-5 pt-8 border-r-2 border-indigo-500	 ${
          open ? "w-72" : "w-20"
        } relative duration-300`}
      >
        <MdArrowCircleLeft
          className={`text-indigo-100 text-3xl rounded-full absolute -right-4 top-9 border border-indigo-500 cursor-pointer transform transition duration-300 hover:text-white hover:border-white ${
            open ? "rotate-0" : "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />{" "}
        <div className="mb-4 inline-flex items-center">
          <Link href="/">
          </Link>
          <Link
            href="/"
            className={`inline-flex items-center`}
          >
            <FaHouse className="mr-3" />
            <span className={`inline-flex items-center ${!open && "hidden"}`}>Home</span>
          </Link>
        </div>
        <div>
          <p
            className={`text-xs text-slate-400 font-semibold ${
              !open && "scale-0"
            }`}
          >
            Socials
          </p>
          <ul>
            <li className="inline-flex items-center mt-2">
              <Link href="/">
              <FaGithub className="mr-3" />
                </Link> 
              <Link
                href="/"
                className={`inline-flex items-center ${!open && "scale-0"}`}
              >
                {open && "Home"}
              </Link>
            </li>
          </ul>

          <ul>
          <li className="inline-flex items-center mt-2">
              <Link href="/">
              <ImLinkedin2 className="mr-3" />
                </Link> 
              <Link
                href="/"
                className={`inline-flex items-center ${!open && "scale-0"}`}
              >
                {open && "LinkedIn"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
