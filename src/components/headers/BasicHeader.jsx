/* Router */
import { Link } from 'react-router-dom';
/* Icons */
import { FaXmark } from 'react-icons/fa6';
import { TiThMenu } from 'react-icons/ti';
/* Utils */
import { images, navLinks } from '../../utils/helpers.jsx';
/* Headless UI */
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

// COMPONENTE
/* Cabecera Básica */
export const BasicHeader = () => (
    <Disclosure as='nav' className='z-50 absolute w-full bg-blue'>
        {({ open }) => (<>
            <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Escritorio (Inicio) */}
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        {/* Logo */}
                        <div className='flex-shrink-0'>
                            <Link className='flex items-center' to='/'>
                                <img
                                    alt='Logo'
                                    className='w-10 h-auto hidden md:block'
                                    src={images.logo}
                                />

                                <div className="px-2 ml-2 relative inline-block">
                                    <div className="absolute inset-0 transform skew-x-12 bg-violet-400" />
                                        
                                    <span className="relative text-gray-800 text-2xl text-center font-bold font-basker">Talentos Ocultos Fans</span>
                                </div>
                            </Link>
                        </div>

                        <div className='hidden md:block'>
                            <div className='ml-20 flex items-baseline space-x-4'>
                                {navLinks.map((link, index) => (
                                    <Link
                                        className='px-4 py-1 mr-2 rounded-full text-white font-bold transition-all duration-300 hover:bg-white hover:text-blue'
                                        key={index}
                                        to={link.pathname}
                                    >
                                        { link.title }
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Botón de Apertura del Menú (Móvil) */}
                    <div className='-mr-2 flex md:hidden'>
                        <DisclosureButton  className='inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-0'>
                            <span className='sr-only'>Menu principal</span>

                            {// CONDICIONAL
                            /* Comprobación del Estado de Apertura (Móvil) */
                            open 
                                ? (<FaXmark className='block h-6 w-6' aria-hidden='true' />) 
                                : (<TiThMenu className='block h-6 w-6' aria-hidden='true' />)
                            }
                        </DisclosureButton>
                    </div>
                </div>
                {/* Escritorio (Fin) */}

                {/* Móvil */}
                <DisclosurePanel className='z-10 absolute left-0 w-full bg-white shadow-md md:hidden'>
                    <div className='px-2 pt-2 pb-3 flex flex-col sm:px-3'>
                        {navLinks.map((link, index) => (
                            <Link
                                className={`px-8 py-2 ${index !== 0 && 'border-t'} text-blue font-bold`}
                                key={index}
                                to={link.pathname}
                            >
                                { link.title }
                            </Link>
                        ))}
                    </div>
                </DisclosurePanel>
            </div>
        </>)}
    </Disclosure>
);

