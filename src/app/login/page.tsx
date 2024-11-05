"use client";

import { useRouter } from "next/navigation";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Layout } from "../../components/layout/Layout";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { useUserContext } from "@/context/UserContext";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const { login } = useUserContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validarCPF = (input: string) => {
    const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
    return regexCPF.test(input);
  };

  const validarSenha = (senha: string) => senha.length >= 8;

  const handleClick = () => {
    if (!validarCPF(username)) {
      alert("Por favor, insira um CPF válido!");
      return;
    }

    if (!validarSenha(password)) {
      alert("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    alert("Login bem-sucedido!");
    setUsername("");
    setPassword("");
    login(username);
    router.push("/");
  };

  return (
    <>
      <Navbar type="unlogged" />

      <Layout>
        <Link href={"/"}>
          <IoIosArrowBack size={40} color="black" className="mt-8 mb-4" />
        </Link>

        <h1 className="text-3xl font-semibold text-cyan-500 mb-0">Acessar Conta</h1>
        <p className="text-lg text-[#0f5a6c] mb-10">Preencha seus dados para continuar</p>

        <form className="flex flex-col w-full mb-10">
          <input
            type="text"
            placeholder="CPF"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-5 p-3 border-2 border-[#0f5a6c] rounded-lg"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-5 p-3 border-2 border-[#0f5a6c] rounded-lg"
          />

          <div className="flex justify-between items-center mb-16">
            <Link href={"/"} className="text-sm underline text-gray-500">Esqueci a minha senha</Link>
            <button
              type="button"
              onClick={handleClick}
              className="px-5 py-2 bg-cyan-500 text-black font-semibold rounded-md hover:bg-blue-500 transition"
            >
              Entrar
            </button>
          </div>
        </form>

        <div className="mb-16 text-left">
          <p>Não tem uma conta na AutoCheck?</p>
          <Link href={"/registration"} className="font-bold text-cyan-500">Crie seu cadastro!</Link>
        </div>
      </Layout>

      <Footer />
    </>
  );
}
