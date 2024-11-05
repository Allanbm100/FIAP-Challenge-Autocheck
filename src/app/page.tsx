"use client"

import { useState, useEffect } from "react";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import imgServico1 from "../assets/images/imagem-servico1.jpg";
import imgServico2 from "../assets/images/imagem-servico2.jpg";
import imgServico3 from "../assets/images/imagem-servico3.jpg";
import fotoAllan from "../assets/images/allan.png";
import fotoCaio from "../assets/images/caio.png";
import fotoLevi from "../assets/images/levi.png";
import backgroundImage from "../assets/images/imagem-section-principal.jpg";
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  const [typeNavbar, setTypeNavbar] = useState<'logged' | 'unlogged'>('unlogged');

  useEffect(() => {
    const logged = false;
    setTypeNavbar(logged ? 'logged' : 'unlogged');
  }, []);

  return (
    <>
      <Navbar type={typeNavbar} />

      <section className="relative h-[538px] w-screen">
        <div className="absolute inset-0 z-[-1]">
          <Image
            src={backgroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            style={{ filter: 'hue-rotate(-5deg) brightness(0.5)' }}
            priority
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 pt-[160px]">
          <h1 className="text-5xl font-bold text-center text-white uppercase">Seja</h1>
          <h1 className="text-5xl font-bold text-center text-white uppercase">Bem-Vindo</h1>
          <p className="text-lg font-light text-center mb-5 text-white w-[350px]">
            Conheça <b>AutoCheck</b>, o seu novo mecânico de bolso!
          </p>
        </div>
      </section>

      <section className="w-full flex flex-col items-center gap-5 py-12 bg-white">
        <h2 className="text-center text-2xl font-semibold text-[#0f5a6c] mt-10">Nosso Serviços</h2>
        <p className="text-center text-lg font-normal text-[#0f5a6c] w-[80vw]">
          Oferecemos diagnósticos precisos de veículos e assistência completa, facilitando orçamentos e
          agendamentos, visando eficiência e a melhor experiência para atender as necessidades do cliente de
          ponta a ponta.
        </p>

        <div className="flex sm:flex-wrap md:flex-nowrap justify-center gap-5 mx-32 mb-10">
          {[imgServico1, imgServico2, imgServico3].map((img, index) => (
            <article key={index} className="flex flex-col items-center gap-2">
              <Image
                className="rounded-lg filter hue-rotate-[-5deg] brightness-50 transition duration-500 hover:brightness-75"
                src={img}
                alt={`Imagem ilustrativa do serviço ${index + 1}`}
              />
              <div className="text-center text-[#0f5a6c]">
                <h3 className="text-xl font-bold">{['Assistência Inteligente', 'Diagnóstico', 'Manutenção'][index]}</h3>
                <span className="text-base font-normal">{['Assistência fácil e ágil via chat bot', 'Diagnóstico completo do seu veículo', 'Direcionamento para o CAPS mais próximo'][index]}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center gap-5 py-12 bg-[#EFF4FF]">
        <h2 className="text-center text-2xl font-semibold text-[#0f5a6c] mt-10">Time AutoCheck</h2>
        <p className="text-center text-lg font-normal text-[#0f5a6c] w-[80vw]">
          Somos o time que idealizou e construiu a solução <b>AutoCheck</b> para ser integrada com a <b>Porto Seguro</b>. Alunos da FIAP, da turma 1TDSPX.
        </p>

        <div className="flex justify-center text-center gap-10 mb-10 flex-wrap">
          {[{ name: "Allan Brito", rm: "RM558948", img: fotoAllan, github: "https://github.com/Allanbm100" },
          { name: "Caio Liang", rm: "RM558868", img: fotoCaio, github: "https://github.com/CaioLiang" },
          { name: "Levi Magni", rm: "RM98276", img: fotoLevi, github: "https://github.com/levmn" }].map((member, index) => (
            <article key={index} className="flex flex-col items-center gap-2">
              <Image src={member.img} alt={`Foto do ${member.name}`} className="border-4 border-[#3AC0E1] rounded-full w-60 h-60" />
              <h3 className="text-xl font-bold text-[#0f5a6c]">{member.name}</h3>
              <span className="text-base font-normal text-[#0f5a6c]">{member.rm}</span>
              <Link href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub color="#0f5a6c" size="25px" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center gap-5 py-12 bg-white">
        <h2 className="text-xl font-semibold text-[#0f5a6c] text-center mt-10">Fale Conosco!</h2>
        <p className="w-[80vw] text-lg text-[#0f5a6c] text-center">Entre em contato conosco para tirar dúvidas, dar sugestões ou solicitar um orçamento.</p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex flex-col items-start w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1159349301374!2d-46.657424174484454!3d-23.56427930685303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dc4e1e39%3A0x9cfd59970ac3b457!2sAv.%20Paulista%2C%201106%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-914!5e0!3m2!1sen!2sbr!4v1716230946303!5m2!1sen!2sbr"
              width="100%"
              height="300"
              className="border border-[#0f5a6c] rounded-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="flex flex-col text-[#0f5a6c] text-base mt-2 gap-2">
              <span className="flex items-center">
                <FaLocationDot size="20px" color="#0f5a6c" />
                <span className="ml-2">Av. Paulista, 1106 - 7º Andar - Bela Vista, São Paulo - SP, 01311-000</span>
              </span>
              <span>Telefone: (11) 4002-8922</span>
              <span>E-Mail: autocheckcontato@fiap.com.br</span>
            </div>
          </div>

          <form action="" method="post" className="flex flex-col justify-center w-full md:w-96">
            <input type="text" name="nome" id="nome" placeholder="Nome" className="font-sans text-sm mb-4 p-2 border border-[#0f5a6c] rounded-md w-full" />
            <input type="email" name="email" id="email" placeholder="E-mail" className="font-sans text-sm mb-4 p-2 border border-[#0f5a6c] rounded-md w-full" />
            <input type="text" name="assunto" id="assunto" placeholder="Assunto" className="font-sans text-sm mb-4 p-2 border border-[#0f5a6c] rounded-md w-full" />
            <textarea name="mensagem" id="mensagem" placeholder="Mensagem" className="h-48 font-sans text-sm mb-4 p-2 border border-[#0f5a6c] rounded-md w-full"></textarea>
            <button type="submit" className="flex items-center justify-center gap-2 p-2 bg-[#0f5a6c] text-white rounded-md">
              <span>
                <IoSend size="20px" />
              </span>
            </button>
          </form>
        </div>

      </section>

      <Footer />
    </>
  );
}
