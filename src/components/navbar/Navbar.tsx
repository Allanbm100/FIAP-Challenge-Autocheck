// src/components/navbar/Navbar.tsx
import Logo from "../../assets/images/autocheck-azul.png";
import Link from "next/link";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "../../context/UserContext";

interface NavbarProps {
  type: string;
}

export const Navbar = ({ type }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { isLoggedIn, logout } = useUserContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="flex justify-between items-center p-1 shadow">
      <div className="flex items-center">
        <Link className="flex-grow-0 flex-shrink-0" href="/">
          <Image
            className="w-[300px] sm:w-[220px] md:w-[250px] lg:w-[250px] xl:w-[250px] 2xl:w-[300px]"
            src={Logo}
            alt="Logotipo Autocheck"
          />
        </Link>

        <ul className="flex gap-[15%]">
          <li className="main-menu flex items-center">
            <Link
              className="pl-8 text-lg font-normal flex-grow-0 flex-shrink-0 text-[#0f5a6c] text-[1.2rem] no-underline"
              href="https://www.portoseguro.com.br/centros-automotivos-porto-seguro"
              target="_blank"
            >
              Parceria Porto
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  className="pl-14 text-lg font-normal flex-grow-0 flex-shrink-0 text-[#0f5a6c] text-[1.2rem] no-underline"
                  href="/generateDiagnosis"
                >
                  Gerar Diagnóstico
                </Link>
                <Link
                  className="pl-14 text-lg font-normal flex-grow-0 flex-shrink-0 text-[#0f5a6c] text-[1.2rem] no-underline"
                  href="/diagnosisHistory"
                >
                  Histórico
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>

      {isLoggedIn ? (
        <div
          className="flex items-center justify-center h-[50px] w-[130px] no-underline m-2 cursor-pointer transition duration-500 hover:bg-[#d6f1f8]"
          onClick={toggleMenu}
        >
          <FaRegUserCircle
            className="w-[35px] h-[35px]"
            color="1696db"
            id="user"
          />
        </div>
      ) : (
        <Link href="/login">
          <div className="flex items-center justify-center h-[50px] w-[130px] bg-[#e1f6fb] rounded-[16px] 
              border-none no-underline m-2 cursor-pointer transition duration-500 hover:bg-[#d6f1f8]">
            <FaRegUserCircle
              className="w-[35px] h-[35px]"
              color="1696db"
              id="user"
            />
            <p className="text-[#0f5a6c] text-[1.2rem] font-medium text-center ml-3">
              Entrar
            </p>
          </div>
        </Link>
      )}

      {isMenuOpen && isLoggedIn && (
        <div className="absolute top-[50px] right-[10px] bg-white shadow-md rounded-lg z-10 w-[150px]">
          <div className="py-2 border-b border-gray-300 hover:bg-gray-100 transition duration-500 md:hidden">
            <Link className="block text-gray-800 no-underline" href="/generateDiagnosis">
              Gerar Diagnóstico
            </Link>
            <Link className="block text-gray-800 no-underline" href="/diagnosisHistory">
              Histórico
            </Link>
          </div>
          <div className="py-2 rounded-b-lg bg-gray-50 hover:bg-gray-100 transition duration-500">
            <span className="block text-gray-800 no-underline cursor-pointer" onClick={handleLogout}>
              Sair
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};
