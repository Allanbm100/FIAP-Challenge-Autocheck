import Logo from "../../assets/images/autocheck-branco.png";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="flex justify-between items-center h-[150px] px-12 bg-black text-white relative bottom-0 sm:px-5 md:px-5 lg:px-5">
            <div className="flex flex-col gap-2">
                <Image className="w-[300px] sm:w-[200px] md:w-[250px] lg:w-[250px] xl:w-[250px] 2xl:w-[300px]" src={Logo} alt="Logo Autocheck" />
                <p className="text-base sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] xl:text-base">AutoCheck &copy; 2024 - Todos os direitos reservados</p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-[20px] hidden sm:hidden md:block md:text-[15px] lg:text-[17px] xl:text-[20px]">Acompanhe as nossas redes sociais</p>
                <div className="flex gap-2">
                    <Link className="text-white text-[35px] inline-block" href="https://www.instagram.com/porto/" target="_blank">
                        <IoLogoInstagram />
                    </Link>
                    <Link className="text-white text-[35px] inline-block" href="https://www.linkedin.com/company/porto/" target="_blank">
                        <IoLogoLinkedin />
                    </Link>
                    <Link className="text-white text-[35px] inline-block" href="https://www.facebook.com/porto" target="_blank">
                        <IoLogoFacebook />
                    </Link>
                </div>
            </div>
        </footer>
    );
}