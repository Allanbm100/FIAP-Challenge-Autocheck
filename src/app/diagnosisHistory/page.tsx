"use client";

import { Layout } from "../../components/layout/Layout";
import { Navbar } from "../../components/navbar/Navbar";
import { Footer } from "../../components/footer/Footer";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

interface Diagnosis {
    id: number;
    type: string;
    date: string;
    car: string;
}

export default function DiagnosisHistory() {
    return (
        <>
            <Navbar type="logged" />

            <Layout>
                <button onClick={() => router.back()} className="mb-5">
                    <IoIosArrowBack size={40} color="black" className="mt-8 mb-4" />
                </button>

                <h1 className="text-3xl font-semibold text-cyan-500 mb-1">Histórico de Diagnósticos</h1>
                <p className="text-lg text-[#0f5a6c] mb-10">
                    Aqui você encontra todos os diagnósticos realizados.
                </p>

                {diagnosticsHistory.length === 0 ? (
                    <h2 className="text-2xl text-gray-600 mb-8">Você ainda não possui diagnósticos.</h2>
                ) : (
                    <ul className="mb-10">
                        {diagnosticsHistory.map((diagnosis) => (
                            <li
                                key={diagnosis.id}
                                className="list-none bg-gray-100 text-[#0f5a6c] mb-4 p-4 rounded-lg shadow"
                            >
                                <p className="font-bold">{diagnosis.type}</p>
                                <p>{diagnosis.car}</p>
                                <p>{diagnosis.date}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </Layout>

            <Footer />
        </>
    );
}
