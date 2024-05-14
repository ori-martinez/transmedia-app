// COMPONENTE
/* Cabecera del Home */
export const HomeHeader = () => (
    <div className="relative bg-blue">
        <div className="absolute inset-x-0 bottom-0">
            <svg
                className="w-full -mb-1 text-white"
                fill="currentColor"
                preserveAspectRatio="none"
                viewBox="0 0 224 12"
            >
                <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    Bienvenidos a {' '}
                        
                    <span className="relative inline-block px-2">
                        <div className="absolute inset-0 transform -skew-x-12 bg-violet-400" />
                            
                        <span className="relative text-gray-800 text-center font-basker">Talentos Ocultos Fans</span>
                    </span>
                </h2>

                <p className="mb-6 text-base text-indigo-100 md:text-xl">Tu hogar para todo lo relacionado con la película que nos inspiró a todos</p>
                <p className="max-w-lg mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">Explora este sitio web dedicado a honrar a las mujeres extraordinarias detrás de la misión espacial de la NASA, celebrando la historia y los personajes que cambiaron nuestra percepción del espacio.</p>
            </div>
        </div>
    </div>
);
