import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import lucasDemoday from '@/app/imgs/lucas-santiago-demoday.png'
import Img from 'next/image'
import Link from 'next/link'
import lucasDemoday2 from '@/app/imgs/lucas-santiago-demoday-2.png'
import standFeiraqui from '@/app/imgs/stand-feiraqui.jpg'

const AboutMe = () => {
  return (
    <div className='flex bg-slate-950'>
      <Sidebar />
      <div className='mx-auto my-10 max-w-3xl'>
        <h1 className='text-center text-4xl font-semibold pb-3 border-b-2 border-slate-800 '>Conheça um pouco sobre mim</h1>

        <div className='mt-7'>
          <ul>
            <li className='text-slate-400'><span className='font-semibold text-white text-lg'>🌎 Localização:{" "}</span>São Paulo, Brasil</li>
            <li className='text-slate-400'><span className='font-semibold text-white text-lg'>🎂 Idade:{" "}</span>20</li>
            <li className='text-slate-400'><span className='font-semibold text-white text-lg'>💼 Cargo:{" "}</span>Desenvolvedor Front-End</li>
            <li className='text-slate-400'><span className='font-semibold text-white text-lg'>🌐 Stacks:{" "}</span>NextJS, ReactJS, NodeJS, TypeScript, JavaScript, HTML, CSS, Bootstrap 5, WordPress</li>
            <li className='text-slate-400'><span className='font-semibold text-white text-lg'>💬 Idiomas:{" "}</span><span className='text-slate-300'>Inglês{" "}</span><span className='text-xs'>(Proficiência Profissional)</span>{" "}·{" "}<span className='text-slate-300'>Português{" "}</span><span className='text-xs'>(Nativo)</span></li>
          </ul>

          <h2 className='mt-7 pt-3 text-2xl font-semibold'>Um pouco da minha história...</h2>

          <Img src={lucasDemoday} alt='Lucas Santiago no Demoday' className='mt-2 rounded' />
          <p className='text-center text-slate-400'>Lucas Santiago apresentando o projeto <Link href="https://github.com/FeirAqui" className='text-blue-600' target='_blank'>FeiraAqui</Link>{" "}(Website), para mais de mil pessoas, concebido em colaboração com o seu grupo no <Link href="https://www.proa.org.br/" className='text-blue-600' target='_blank'>Instituto PROA</Link>, em julho de 2022.</p>

          <h3>Onde tudo começou</h3>
          <div className='grid grid-cols-2 gap-3'>
            <Img src={lucasDemoday2} alt='Lucas Santiago no Demoday' className='mt-2 rounded' />
            <Img src={standFeiraqui} alt='Lucas Santiago no Demoday' className='mt-2 rounded' />
          </div>

          <div className='mt-7 text-slate-300'>
            <p>Entusiasta de tecnologia desde a adolescência, explorei diversas áreas de TI antes de encontrar minha paixão pela programação. Após seis meses de estudo intenso em Desenvolvimento Web no Instituto PROA, em 2022, percebi que sou apaixonado por programação. Esta é a minha vocação e o que irei levar para o resto da vida.</p>
          </div>
          <div className='mt-5 text-slate-300'>
            <p>Aprimorando habilidades e conhecimentos, atualmente atuo como Desenvolvedor Front-end na <Link href="https://actmob.com/" target="_blank" className='text-blue-600'>Actmob</Link>. Trabalho de maneira dinâmica na concepção de interfaces intuitivas e envolventes para diversos produtos digitais. Trabalhamos para clientes renomados como <Link href="https://www.cotacchevroletmogi.com.br/" target="_blank" className='text-blue-600'>Chevrolet Cotac</Link>, <Link href="https://www.suzanoshopping.com.br/" target="_blank" className='text-blue-600'>Suzano Shopping</Link>, <Link href="https://klgdobrasil.com.br/" target="_blank" className='text-blue-600'>KLG do Brasil</Link>, entre outros. A minha função permite uma fusão de criatividade e experiência técnica, resultando em experiências visuais atraentes que conectam profundamente com os usuários.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMe