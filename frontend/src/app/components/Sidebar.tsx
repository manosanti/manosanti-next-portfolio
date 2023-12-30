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
        className={`bg-slate-950 h-full p-5 pt-8 border-r-2 border-slate-800	 ${
          open ? "w-72" : "w-20"
        } relative duration-300`}
      >
        <MdArrowCircleLeft
          className={`text-indigo-100 text-3xl rounded-full fixed ml-4 left-64 top-9 border border-indigo-500 cursor-pointer transform transition duration-300 hover:text-white hover:border-white active:scale-150 ${
            open ? "rotate-0" : "rotate-180 left-12"
          }`}
          onClick={() => setOpen(!open)}
        />{" "}
        <div className="fixed">
          <ul className="duration-300 rounded hover:bg-indigo-950 cursor-pointer mt-2">
            <li className="inline-flex items-center p-1 px-2">
              <Link href="/" className={`w-full inline-flex items-center`}>
                <FaHouse className="mr-3" />
                <span
                  className={`inline-flex items-center text-sm ${
                    !open && "hidden"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
          </ul>
          <div>
            <p
              className={`text-xs mt-5 text-slate-400 font-semibold ${
                !open && "scale-0"
              }`}
            >
              Eu
            </p>

            <ul className="duration-300 rounded hover:bg-indigo-950 cursor-pointer mt-2">
              <li className="inline-flex items-center p-1 px-2">
                <Link
                  href="/pages/about-me"
                  className={`inline-flex items-center`}
                >
                  <IoBookOutline className="mr-3" />
                  <span
                    className={`inline-flex items-center text-sm ${
                      !open && "hidden"
                    }`}
                  >
                    Sobre Mim
                  </span>
                </Link>
              </li>
            </ul>

            <ul className="duration-300 rounded hover:bg-indigo-950 cursor-pointer mt-1">
              <li className="inline-flex items-center p-1 px-2">
                <Link
                  href="/pages/projects"
                  className={`inline-flex items-center`}
                >
                  <FaFolderOpen className="mr-3" />
                  <span
                    className={`inline-flex items-center text-sm ${
                      !open && "hidden"
                    }`}
                  >
                    Projetos
                  </span>
                </Link>
              </li>
            </ul>

            <ul className="duration-300 rounded hover:bg-indigo-950 cursor-pointer mt-1">
              <li className="inline-flex items-center p-1 px-2">
                <Link href="/pages/uses" className={`inline-flex items-center`}>
                  <MdLaptopChromebook className="mr-3" />
                  <span
                    className={`inline-flex items-center text-sm ${
                      !open && "hidden"
                    }`}
                  >
                    Tecnologias e Ferramentas
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p
              className={`text-xs mt-5 text-slate-400 font-semibold ${
                !open && "scale-0"
              }`}
            >
              Socials
            </p>
            <ul className="mt-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
              <li className="inline-flex items-center p-1 px-2">
                <Link href="/" className={`inline-flex items-center`}>
                  <FaGithub className="mr-3" />
                  <span
                    className={`inline-flex items-center text-sm ${
                      !open && "hidden"
                    }`}
                  >
                    GitHub
                  </span>
                </Link>
              </li>
            </ul>

            <ul className="mt-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
              <li className="inline-flex items-center p-1 px-2">
                <Link href="/" className={`inline-flex items-center`}>
                  <ImLinkedin2 className="mr-3" />
                  <span
                    className={`inline-flex items-center text-sm ${
                      !open && "hidden"
                    }`}
                  >
                    LinkedIn
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="mt-2 duration-300 rounded hover:bg-indigo-950 cursor-pointer">
              <li className="inline-flex items-center p-1 px-2">
                <Link href="/" className={`inline-flex items-center`}>
                  <MdEmail className="mr-3" />
                  <span
                    className={`inline-flex items-center text-sm ${
                      !open && "hidden"
                    }`}
                  >
                    E-mail
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
