import React from "react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import profilePhoto from "@/app/imgs/teste.png";
import Img from "next/image";
import easyAluga from '@/app/imgs/projects/easy-aluga.webp';
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex bg-slate-950">
      <Sidebar />
      <div className="mx-auto my-10 max-w-3xl">
        <div className="flex items-center">
          <Img
            src={profilePhoto}
            alt="Lucas Santiago"
            className="aspect-square rounded-lg overflow-hidden w-24 h-24"
          />
          <div className="ml-4">
            <h1>Lucas Santiago</h1>
            <span>
              Front-end developer @{" "}
              <Link href="/" className="text-blue-600">
                Actmob
              </Link>
            </span>
            <ul className="flex">
              <li className="bg-indigo-700 mr-1 py-0 px-1 rounded">
                <p>React</p>
              </li>
              <li className="bg-indigo-700 mr-1 py-0 px-1 rounded">
                <p>React</p>
              </li>
              <li className="bg-indigo-700 mr-1 py-0 px-1 rounded">
                <p>React</p>
              </li>
              <li className="bg-indigo-700 mr-1 py-0 px-1 rounded">
                <p>React</p>
              </li>
              <li className="bg-indigo-700 mr-1 py-0 px-1 rounded">
                <p>React</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded border border-collapse border-slate-800 my-4 p-2">
          <h3>📋 Sobre mim:</h3>
          <p>
            Hello, my name is Erick Nathan, I am a dedicated front-end
            developer, with extensive experience in technologies such as NodeJS
            and ReactJS, and a track record with notable clients such as Uber
            Chip, Correios Celular and Carrefour, specializing in robust and
            user-friendly solutions to the user, prioritizing scalability,
            accessibility and optimized performance.
          </p>
          {/* <Link href={"/about"} className="text-right">Teste</Link> */}
        </div>
        {/* Card Experiences */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded border border-collapse border-slate-800 my-4 p-2">
            <h3>💼 Experiences</h3>
            <p>
              Hello, my name is Erick Nathan, I am a dedicated front-end
              developer, with extensive experience in technologies such as
              NodeJS and ReactJS, and a track record with notable clients such
              as Uber Chip, Correios Celular and Carrefour, specializing in
              robust and user-friendly solutions to the user, prioritizing
              scalability, accessibility and optimized performance.
            </p>
            {/* <Link href={"/about"} className="text-right">Teste</Link> */}
          </div>
          <div className="rounded border border-collapse border-slate-800 my-4 p-2">
            <h3>💼 Experiences</h3>
            <p>
              Hello, my name is Erick Nathan, I am a dedicated front-end
              developer, with extensive experience in technologies such as
              NodeJS and ReactJS, and a track record with notable clients such
              as Uber Chip, Correios Celular and Carrefour, specializing in
              robust and user-friendly solutions to the user, prioritizing
              scalability, accessibility and optimized performance.
            </p>
          </div>

        </div>
          {/* My Projects */}
          <div className="rounded border border-collapse border-slate-800 my-4 p-2">
            <h3>📂 My projects</h3>
            <div className="grid grid-cols-2">
              <Img src={easyAluga} alt="Lucas Santiago" className="my-2" />
              <div className="pl-4">
                <h2 className="text-right">Easy Aluga</h2>
                <p className="text-right">A white-label application to rent any vehicle, developed during the BRQ Easy Carros Challenge on FIAP.</p>
                <div className="float-right grid grid-cols-2 gap-2">
                  <button className="bg-blue-600 rounded hover:bg-blue-800 duration-300"><Link href="/" className="text-sm inline-flex items-center"><MdArrowOutward className="mr-2" />Visitar</Link></button>
                  <button className="bg-transparent rounded border border-slate-700 hover:bg-slate-800 duration-300 py-1 px-3"><Link href="/" className="text-sm inline-flex items-center"><FaGithub className="mr-2" />Código-fonte</Link></button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
