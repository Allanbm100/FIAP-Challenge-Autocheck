"use client";

import { useRouter } from "next/navigation";
import { Footer } from "../../components/footer/Footer";
import { Layout } from "../../components/layout/Layout";
import { Navbar } from "../../components/navbar/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Button } from "../../components/button/Button";

export default function VehicleRegistration() {
    const router = useRouter();

    const [year, setYear] = useState("");
    const [vehicleManufacturer, setVehicleManufacturer] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [engine, setEngine] = useState("");

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const yearNumber = parseInt(year, 10);
        if (isNaN(yearNumber) || yearNumber < 1886 || yearNumber > new Date().getFullYear()) {
            alert("Por favor, insira um ano válido!");
            return;
        }

        if (!vehicleManufacturer.trim()) {
            alert("Por favor, insira uma montadora válida!");
            return;
        }

        if (!vehicle.trim()) {
            alert("Por favor, insira um veículo válido!");
            return;
        }

        if (!engine.trim()) {
            alert("Por favor, insira um motor válido!");
            return;
        }

        alert("Cadastro de veículo realizado com sucesso!");
        router.push("/");
    };

    return (
        <>
            <Navbar type="logged" />

            <Layout>
                <button onClick={() => router.back()} className="mb-5">
                    <IoIosArrowBack size={40} color="black" />
                </button>

                <h1 className="text-3xl font-semibold text-cyan-500 mb-1">Cadastrar Veículo</h1>
                <p className="text-lg text-[#0f5a6c] mb-10">Preencha as informações do seu veículo</p>

                <form className="space-y-5" action="" method="post" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Ano"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full mb-5 px-4 py-2 border-2 border-[#0f5a6c] rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Montadora"
                        value={vehicleManufacturer}
                        onChange={(e) => setVehicleManufacturer(e.target.value)}
                        className="w-full mb-5 px-4 py-2 border-2 border-[#0f5a6c] rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Veículo"
                        value={vehicle}
                        onChange={(e) => setVehicle(e.target.value)}
                        className="w-full mb-5 px-4 py-2 border-2 border-[#0f5a6c] rounded-lg"
                    />
                    <input
                        type="text"
                        placeholder="Motor"
                        value={engine}
                        onChange={(e) => setEngine(e.target.value)}
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
