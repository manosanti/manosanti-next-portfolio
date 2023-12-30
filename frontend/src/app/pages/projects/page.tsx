import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import easyAluga from "@/app/imgs/projects/easy-aluga.webp";
import Img from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex bg-slate-950">
      <Sidebar />
      <div className="mx-auto my-10 max-w-3xl">
        <h1 className="text-center text-4xl font-semibold pb-3">
          Meus Projetos
        </h1>
          <p className="text-slate-400 text-center">
            Encontre aqui alguns dos meus <strong>melhores projetos</strong>. Você pode ver todos
            no meu <Link href="/" className="text-blue-600">GitHub</Link>.
          </p>

        <div className="grid grid-cols-2 gap-7 mt-7">
          <div className="border border-slate-700 rounded p-5">
            <Img src={easyAluga} alt="Easy Aluga" className="rounded mb-5" />
            <h2 className="font-bold text-xl">Easy Aluga</h2>
            <p className="text-slate-400">
              Uma aplicação white-label para alugar qualquer veículo,
              desenvolvida durante o Desafio BRQ Easy Carros na FIAP.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
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
          <div className="border border-slate-700 rounded p-5">
            <Img src={easyAluga} alt="Easy Aluga" className="rounded mb-5" />
            <h2 className="font-bold text-xl">Easy Aluga</h2>
            <p className="text-slate-400">
              Uma aplicação white-label para alugar qualquer veículo,
              desenvolvida durante o Desafio BRQ Easy Carros na FIAP.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
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
  );
};

export default page;
