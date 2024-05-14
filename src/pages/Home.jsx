/* Components */
import { Footer } from '../components/Footer.jsx';
import { HomeHeader } from '../components/headers/HomeHeader.jsx';
import { UpTransition } from '../components/transitions/UpTransition.jsx';
/* Icons */
import { FaStar } from 'react-icons/fa6';
import { PiStarAndCrescentFill } from 'react-icons/pi';
/* Hooks */
import { useNavigate } from 'react-router-dom';
/* Utils */
import { images } from '../utils/helpers.jsx';

// PÁGINA
/* Home */
const Home = () => {
    /* Navegación */
    const navigate = useNavigate();

    // RETORNO
    return (
        <UpTransition className='font-mont'>
            {/* Cabecera */}
            <HomeHeader />

            {/* Información de la Película */}
            <div className="my-10 grid grid-cols-3">
                <img
                    alt="Poster de Talentos Ocultos"
                    className="col-span-3 place-content-center sm:col-span-1"
                    src={images.poster1}   
                />

                <div className="col-span-3 place-content-center text-sm sm:col-span-2 sm:text-xl">
                    <div className="px-16 py-8 flex flex-col items-center sm:items-end">
                        <p className="text-center sm:text-left">
                            ¿Quieres conocer más? Descubre la fascinante ficha técnica de <span className="text-ruby font-basker font-bold">Talentos Ocultos</span>. Conoce a los actores, el director, los premios ganados y mucho más. ¡Haz clic en el botón para explorar el universo detrás de esta película inspiradora!
                        </p>

                        <button
                            className="px-4 py-1 mt-4 bg-violet-500 rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-violet-700 sm:px-8 sm:py-2 sm:text-base"
                            onClick={() => navigate('/ficha-tecnica')}
                            type="button"
                        >
                            Ir a la Ficha Técnica
                        </button>
                    </div>
                    <div className="px-16 py-8 flex flex-col items-center sm:items-start">
                        <p className="text-center sm:text-right">
                            Explora los perfiles de las talentosas actrices que dieron vida a estas heroínas en <span className="text-ruby font-basker font-bold">Talentos Ocultos</span>. Descubre sus carreras, otros roles destacados y cómo se prepararon para este papel transformador. ¡No te pierdas la oportunidad de conocer más sobre estas increíbles actrices!
                        </p>

                        <button
                            className="px-4 py-1 mt-4 bg-violet-500 rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-violet-700 sm:px-8 sm:py-2 sm:text-base"
                            onClick={() => navigate('/actrices')}
                            type="button"
                        >
                            Ver a las Actrices Principales
                        </button>
                    </div>
                </div>
            </div>

            {/* Trivia */}
            <div className="px-10 py-40 relative flex flex-col items-center justify-center bg-gradient-to-l from-blue via-blue-dark to-blue sm:px-60 sm:py-16">
                <div className='absolute left-12 top-4'>
                    <div className='relative text-white'>
                        <PiStarAndCrescentFill className='mt-4 w-20 h-20' />
                        <FaStar className='w-6 h-6 absolute left-0 -bottom-6' />
                        <FaStar className='w-4 h-4 absolute -left-4 top-0' />
                        <FaStar className='w-4 h-4 absolute right-0 bottom-0' />
                    </div>
                </div>

                <h2 className="mb-8 text-3xl text-center font-bold tracking-tight text-violet-400 sm:text-4xl sm:leading-none">
                    ¿Eres un verdadero fan de{' '}
                            
                    <span className="relative inline-block px-2">
                        <div className="absolute inset-0 transform skew-x-12 bg-white bg-opacity-95" />
                                
                        <span className="relative text-blue-light text-center font-basker">Talentos Ocultos</span>
                    </span>?
                </h2>

                <p className="text-sm text-white text-center sm:text-xl">Pon a prueba tus conocimientos con nuestra trivia especial sobre la película. Descubre si puedes recordar todos los detalles y momentos clave de esta increíble historia. ¡Haz clic aquí para aceptar el desafío! ¿Estás listo?</p>
            
                <button
                    className="px-4 py-1 mt-8 bg-emerald rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-emerald-dark sm:px-8 sm:py-2 sm:text-base"
                    onClick={() => navigate('/trivia')}
                    type="button"
                >
                    ¡Empezar!
                </button>

                <div className='absolute right-12 bottom-4'>
                    <div className='relative text-white'>
                        <FaStar className='w-6 h-6 absolute right-0 -top-6' />
                        <FaStar className='w-4 h-4 absolute -right-4 bottom-0' />
                        <FaStar className='w-4 h-4 absolute left-0 top-0' />
                        <PiStarAndCrescentFill className='mb-4 w-20 h-20 rotate-180' />
                    </div>
                </div>
            </div>

            {/* Pie de Página */}
            <Footer />
        </UpTransition>
    );
}

export default Home;
