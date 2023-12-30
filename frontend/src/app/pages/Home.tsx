import React from "react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";
import profilePhoto from "@/app/imgs/teste.png";
import Img from "next/image";
import easyAluga from "@/app/imgs/projects/easy-aluga.webp";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import uninoveLogo from "@/app/imgs/uninove-logo.png";
import actmobLogo from "@/app/imgs/actmob-logo.jpeg";
import proaLogo from "@/app/imgs/download.png";
import oracleLogo from "@/app/imgs/downloadOracle.png";
import { FiDownload } from "react-icons/fi";
import lucasAvatar from "@/app/imgs/lucasAvatar.webp";

function calcMonthsActmobFromStart(startDate: Date): number {
  const today = new Date();
  const years = today.getFullYear() - startDate.getFullYear();
  const months = today.getMonth() - startDate.getMonth();
  return years * 12 + months;
}

const Home = () => {
  return (
    <div className={`flex bg-slate-950`}>
      <Sidebar />
      <div className="mx-auto my-10 max-w-3xl">
        <div className="flex items-center">
          <label className="swap swap-flip text-9xl">
            <input type="checkbox" />

            <div className="swap-on">
              <Img
                src={lucasAvatar}
                alt="Lucas Santiago"
                className="aspect-square rounded-lg overflow-hidden w-24 h-24"
              />
            </div>

            <div className="swap-off">
              <Img
                src={profilePhoto}
                alt="Lucas Santiago"
                className="aspect-square rounded-lg overflow-hidden w-24 h-24"
              />
            </div>
          </label>

          <div className="ml-4">
            <h1 className="text-3xl font-bold">Lucas Santiago</h1>
            <span className="text-slate-400">
              Desenvolvedor Front-end @{" "}
              <Link href="/" className="text-blue-600">
                Actmob
              </Link>
            </span>
            <ul className="flex my-1">
              <li className="text-xs bg-indigo-950 mr-1 py-0 px-2 rounded">
                <p>ReactJS</p>
              </li>
              <li className="text-xs bg-indigo-950 mr-1 py-0 px-2 rounded">
                <p>NextJS</p>
              </li>
              <li className="text-xs bg-indigo-950 mr-1 py-0 px-2 rounded">
                <p>NodeJS</p>
              </li>
              <li className="text-xs bg-indigo-950 mr-1 py-0 px-2 rounded">
                <p>TypeScript</p>
              </li>
              <li className="text-xs bg-indigo-950 mr-1 py-0 px-2 rounded">
                <p>JavaScript</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Card About Me */}
        <div className="rounded-xl border border-collapse border-slate-800 my-4 p-7">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-semibold ">📋 Sobre mim</h3>
            <Link href="/" className="text-xs flex items-center text-blue-600">
              Saber Mais <IoIosArrowForward />
            </Link>
          </div>
          <p className="text-slate-400">
            Olá, meu nome é <strong>Lucas Santiago</strong>, sou um{" "}
            <strong>Desenvolvedor Front-End </strong>
            dedicado, com ampla experiência em tecnologias como{" "}
            <strong>NodeJS</strong> e<strong> ReactJS</strong>. Atualmente, faço
            parte da equipe da <strong>Actmob Marketing Digital</strong>, onde
            trabalho para criar soluções robustas e amigáveis ao usuário. Busco
            sempre priorizar a escalabilidade, acessibilidade e desempenho
            otimizado em meus projetos.
          </p>
        </div>

        {/* Card - Experiences */}
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-xl border border-collapse border-slate-800 my-4 p-7">
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold ">💼 Experiências</h3>
              <Link
                href="/"
                className="text-xs flex items-center text-blue-600"
              >
                Saber Mais <IoIosArrowForward />
              </Link>
            </div>
            <div className="flex items-center divide-slate-700">
              <Img
                src={actmobLogo}
                alt="Actmob Logo"
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-700 "
              />
              <div className="ml-3">
                <h3 className="text-sm font-semibold">Actmob</h3>
                <p className="text-slate-400 text-xs">
                  Desenvolvedor Front-End
                </p>
                <p className="text-slate-500 text-xs">
                  2023 - Atualmente •{" "}
                  {Number(calcMonthsActmobFromStart(new Date(2023, 5, 19)))}{" "}
                  meses
                </p>
              </div>
            </div>

            <div className="flex items-center divide-slate-700 mt-3">
              <Img
                src={uninoveLogo}
                alt="Uninove"
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-700 "
              />
              <div className="ml-3">
                <h3 className="text-sm font-semibold">Uninove</h3>
                <p className="text-slate-400 text-xs">
                  Estudante em Análise e Desenvolvimento de Sistemas
                </p>
                <p className="text-slate-500 text-xs">2023 - 2025</p>
              </div>
            </div>

            <div className="flex items-center divide-slate-700 mt-3">
              <Img
                src={oracleLogo}
                alt="Oracle One Next Education Logo"
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-700 "
              />
              <div className="ml-3">
                <h3 className="text-sm font-semibold">
                  Oracle Next Education (Alura)
                </h3>
                <p className="text-slate-400 text-xs">
                  Estudante em Desenvolvimento Front-End
                </p>
                <p className="text-slate-500 text-xs">
                  fev. 2022 - jul. 2022 • 6 meses
                </p>
              </div>
            </div>

            <div className="flex items-center divide-slate-700 mt-3">
              <Img
                src={proaLogo}
                alt="Proa Logo"
                className="w-12 h-12 rounded-full p-1 border-2 border-slate-700 "
              />
              <div className="ml-3">
                <h3 className="text-sm font-semibold">Instituto Proa</h3>
                <p className="text-slate-400 text-xs">
                  Estudante em Desenvolvimento Full-Stack
                </p>
                <p className="text-slate-500 text-xs">
                  fev. 2022 - jul. 2022 • 6 meses
                </p>
              </div>
            </div>

            <div className="text-center mt-7">
              <Link href="/">
                <button className="bg-blue-600 p-2 w-full rounded-md flex items-center justify-center text-sm font-medium">
                  Baixar meu currículo <FiDownload className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-collapse border-slate-800 my-4 p-7">
            <div className="flex justify-between mb-4">
              <h3 className="text-xl font-semibold">💼 Experiences</h3>
              <Link
                href="/"
                className="text-xs flex items-center text-blue-600"
              >
                Saber Mais <IoIosArrowForward />
              </Link>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
              commodi dignissimos id est itaque ducimus a obcaecati qui earum
              accusamus similique, dolore, possimus necessitatibus fugit error
              consequatur veniam aspernatur aut?
            </p>
          </div>
        </div>
        {/* My Projects */}
        <div className="rounded-xl border border-collapse border-slate-800 my-4 p-7">
          <div className="flex justify-between mb-4">
            <h3 className="text-xl font-semibold">📂 Meus Projetos</h3>
            <Link href="/" className="text-xs flex items-center text-blue-600">
              Saber Mais <IoIosArrowForward />
            </Link>
          </div>
          <div className="grid grid-cols-2">
            <Img src={easyAluga} alt="Lucas Santiago" className="my-2" />
            <div className="pl-4">
              <h2 className="text-right font-bold text-xl">Easy Aluga</h2>
              <p className="text-right text-slate-400">
                A white-label application to rent any vehicle, developed during
                the BRQ Easy Carros Challenge on FIAP.
              </p>
              <div className="float-right mt-4 grid grid-cols-2 gap-2">
                <button className="bg-blue-600 rounded hover:bg-blue-800 duration-300">
                  <Link href="/" className="text-sm inline-flex items-center">
                    <MdArrowOutward className="mr-2" />
                    Visitar
                  </Link>
                </button>
                <button className="bg-transparent rounded border border-slate-700 hover:bg-slate-800 duration-300 py-1 px-3">
                  <Link href="/" className="text-sm inline-flex items-center">
                    <FaGithub className="mr-2" />
                    Código-fonte
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
