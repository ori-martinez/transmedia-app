/* Router */
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
// COMPONENTE
/* Pie de las Páginas */
export const Footer = () => (
    <footer className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 print:hidden'>
        <div className='px-4 py-2 border-t border-gray-200 text-sm text-blue-dark text-center sm:px-12 sm:py-8 sm:text-left'>
            <span className='block sm:mr-1 sm:inline'>2024 &copy; <b>Team FORO</b>.</span>
            <span className='block sm:inline'>Todos los Derechos Reservados.</span>
            <div className='flex items-center justify-center sm:mt-1 sm:justify-start'>
                Siguenos en <Link target='_blank' to='https://www.instagram.com/talentos_ocultos_fans?igsh=MXIzd3B0ZnIzYmN6aA%3D%3D&utm_source=qr'>
                    <IoLogoInstagram  className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
            </div>
        </div>
    </footer>
);
