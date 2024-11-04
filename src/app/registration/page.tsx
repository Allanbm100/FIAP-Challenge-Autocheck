"use client";

import { useRouter } from "next/navigation";
import { Footer } from "../../components/footer/Footer";
import { Layout } from "../../components/layout/Layout";
import { Navbar } from "../../components/navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { Button } from "../../components/button/Button";
import { useUserContext } from "../../context/userContext";
import Link from "next/link";

export default function Registration() {
    const router = useRouter();
    const { isLoggedIn, login } = useUserContext();

    const [CPF, setCPF] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            alert("Usuário já está logado");
            router.push("/");
        }
    }, [isLoggedIn, router]);

    const validarCPF = (input: string): boolean => {
        const regexCPF = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        return regexCPF.test(input);
    };

    const validarSenha = (senha: string): boolean => senha.length >= 8;

    const confirmaSenha = (senha: string, confirmarSenha: string): boolean => senha === confirmarSenha;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!validarCPF(CPF)) {
            alert("Por favor, insira um CPF válido!");
            return;
        }

        if (!validarSenha(password)) {
            alert("A senha deve ter no mínimo 8 caracteres!");
            return;
        }

        if (!confirmaSenha(password, confirmPassword)) {
            alert("As senhas não coincidem!");
            return;
        }

        alert("Cadastro realizado com sucesso! Agora cadastre um veículo.");
        login(CPF);
        router.push("/cadastrar-veiculo");
    };

    return (
        <>
            <Navbar type="unlogged" />

            <Layout>
                <Link href={"/login"} className="mb-5">
                    <IoIosArrowBack size={40} color="black" className="mt-8 mb-4" />
                </Link>

                <h1 className="text-3xl font-semibold text-cyan-500 mb-1">Cadastrar Conta</h1>
                <p className="text-lg text-[#0f5a6c] mb-10">Preencha seus dados para continuar</p>

                <form className="space-y-5 mb-16" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                        className="w-full px-4 py-2 border-2 border-[#0f5a6c] rounded-lg"
                    />

                    <input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                        onChange={(e) => setCPF(e.target.value)}
                        className="w-full mb-5 px-4 py-2 border-2 border-[#0f5a6c] rounded-lg"
                    />

                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-5 px-4 py-2 border-2 border-[#0f5a6c] rounded-lg"
                    />

                    <input
                        type="password"
                        name="confirmar-senha"
                        placeholder="Confirmar senha"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full mb-5 px-4 py-2 border-2 border-[#0f5a6c] rounded-lg"
                    />

                    <div className="flex justify-end">
                        <Button type="submit" onClick={handleClick}>
                            Cadastrar
                        </Button>
                    </div>
                </form>
            </Layout>

            <Footer />
        </>
    );
}
