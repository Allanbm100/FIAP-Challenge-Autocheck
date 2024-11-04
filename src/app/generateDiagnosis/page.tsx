"use client";

import React, { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Layout } from "../../components/layout/Layout";
import { Navbar } from "../../components/navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { TiFlashOutline } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function GenerateDiagnosis() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleButtonClick = (type: string) => {
    console.log(`Botão ${type} clicado`);
  };

  return (
    <>
      <Navbar type="logged" />

      <Layout>
        <Link href={"/"}>
          <IoIosArrowBack size={40} color="black" className="mt-8 mb-4"/>
        </Link>

        <h1 className="text-3xl font-semibold text-cyan-500 mb-1">Gerar Diagnóstico</h1>
        <p className="text-lg text-[#0f5a6c] mb-10">Hyundai HB20 Sedan - 2013</p>

        <form className="flex items-center mb-8" action="" method="post">
          <input
            type="text"
            name="busca-codigo-falha"
            id="busca-codigo-falha"
            placeholder="Busque pelo código de falha"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full p-3 border-2 border-[#0f5a6c] rounded-lg mr-2 placeholder-[#0f5a6c] placeholder-font-rubik"
          />

          <Link href={"/"}>
            <FaSearch size={45} color="black" className="bg-cyan-500 p-3 border-black border-2 rounded-md "/>
          </Link>
        </form>

        <p className="text-center text-[#0f5a6c] mb-8">
          Não tem o código de falha? Busque por alternativas abaixo.
        </p>

        <div className="flex flex-col mb-10">
          <button onClick={() => handleButtonClick("Elétrica")} className="flex items-center justify-between bg-cyan-500 border-2 border-black rounded-lg p-3 mb-4 hover:bg-cyan-400 transition">
            <div className="flex items-center space-x-2">
              <TiFlashOutline size={40} color="black" />
              <p className="text-black font-bold">Falha Elétrica</p>
            </div>
          </button>

          <button onClick={() => handleButtonClick("Mecânica")} className="flex items-center justify-between bg-cyan-500 border-2 border-black rounded-lg p-3 mb-4 hover:bg-cyan-400 transition">
            <div className="flex items-center space-x-2">
              <IoSettingsOutline size={40} color="black" />
              <p className="text-black font-bold">Falha Mecânica</p>
            </div>
          </button>

          <button onClick={() => handleButtonClick("Possíveis Soluções")} className="flex items-center justify-between  bg-cyan-500 border-2 border-black rounded-lg p-3 hover:bg-cyan-400 transition">
            <div className="flex items-center space-x-2">
              <RiLightbulbFlashFill size={40} color="black" />
              <p className="text-black font-bold">Possíveis Soluções</p>
            </div>
          </button>
        </div>
      </Layout>

      <Footer />
    </>
  );
}
