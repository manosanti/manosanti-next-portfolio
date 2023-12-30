import Sidebar from "@/app/components/Sidebar";
import Img from "next/image";
import htmlIcon from "@/app/imgs/icons/html.png";

const page = () => {
  return (
    <div className="flex bg-slate-950">
      <Sidebar />
      <div className="mx-auto my-10 max-w-3xl">
        <div className="mb-8">
            <h1 className="text-4xl font-semibold pb-3">Tecnologias e Ferramentas</h1>
            <p className="text-slate-400">Explore as tecnologias e ferramentas que impulsionam a minha experiência em desenvolvimento. Eu seleciono e uso meticulosamente essas ferramentas para criar soluções robustas e eficientes, priorizando sempre a experiência do usuário.</p>
        </div>

      <div className="grid grid-cols-4 gap-2 max-w-3xl mx-auto">

        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative mx-low-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">HTML</p>
        </div>
        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative mx-low-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">CSS</p>
        </div>
        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative overflow-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">JavaScript</p>
        </div>
        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative overflow-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">TypeScript</p>
        </div>
        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative overflow-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">NextJS</p>
        </div>
        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative overflow-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">ReactJS</p>
        </div>
        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative overflow-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">Tailwind CSS</p>
        </div>
        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative overflow-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">Styled<br></br>Components</p>
        </div>
        <div className="flex items-center bg-slate-800 p-2 rounded-lg cursor-pointer duration-500 hover:bg-slate-900 h-full">
          <div className="relative overflow-hidden">
            <Img
              src={htmlIcon}
              alt="HTML"
              className="rounded relative bg-slate-900 p-2 z-100 w-11 h-11"
            />
          </div>
          <p className="ml-2">React Router</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
