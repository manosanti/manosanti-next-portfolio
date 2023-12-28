"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

// Icons
import { MdArrowCircleLeft } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";
import { MdLaptopChromebook } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`bg-slate-950 h-screen p-5 pt-8 border-r-2 border-slate-800	 ${
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
          <Link href="/" className={`px-2 inline-flex items-center`}>
            <FaHouse className="mr-3" />
            <span className={`inline-flex items-center ${!open && "hidden"}`}>
              Home
            </span>
          </Link>
        </div>
        <div>
          <p
            className={`text-xs text-slate-400 font-semibold ${
              !open && "scale-0"
            }`}
          >
            Eu
          </p>

          <ul className="px-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
            <li className="inline-flex items-center mt-2">
              <Link href="/" className={`inline-flex items-center`}>
                <IoBookOutline className="mr-3" />
                <span
                  className={`inline-flex items-center ${!open && "hidden"}`}
                >
                  Sobre Mim
                </span>
              </Link>
            </li>
          </ul>

          <ul className="px-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
            <li className="inline-flex items-center mt-2">
              <Link href="/" className={`inline-flex items-center`}>
                <FaFolderOpen className="mr-3" />
                <span
                  className={`inline-flex items-center ${!open && "hidden"}`}
                >
                  Projetos
                </span>
              </Link>
            </li>
          </ul>

          <ul className="px-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
            <li className="inline-flex items-center mt-2">
              <Link href="/" className={`inline-flex items-center`}>
                <MdLaptopChromebook className="mr-3" />
                <span
                  className={`inline-flex items-center ${!open && "hidden"}`}
                >
                  Tecnologias e Ferramentas
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p
            className={`text-xs text-slate-400 font-semibold ${
              !open && "scale-0"
            }`}
          >
            Socials
          </p>
          <ul className="px-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
            <li className="inline-flex items-center mt-2">
              <Link href="/" className={`inline-flex items-center`}>
                <FaGithub className="mr-3" />
                <span
                  className={`inline-flex items-center ${!open && "hidden"}`}
                >
                  GitHub
                </span>
              </Link>
            </li>
          </ul>

          <ul className="px-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
            <li className="inline-flex items-center mt-2">
              <Link href="/" className={`inline-flex items-center`}>
                <ImLinkedin2 className="mr-3" />
                <span
                  className={`inline-flex items-center ${!open && "hidden"}`}
                >
                  LinkedIn
                </span>
              </Link>
            </li>
          </ul>
          <ul className="px-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
            <li className="inline-flex items-center mt-2">
              <Link href="/" className={`inline-flex items-center`}>
                <MdEmail className="mr-3" />
                <span
                  className={`inline-flex items-center ${!open && "hidden"}`}
                >
                  E-mail
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
