/* Components */
import { PagesLayout } from '../../components/layouts/PagesLayout.jsx';
/* Utils */
import { images } from '../../utils/helpers.jsx';

// PÁGINA
/* Ficha Técnica de la Película */
const Index = () => (
    <PagesLayout title='Ficha Técnica'>
        <div className="mt-2 sm:mt-8 w-72 grid grid-cols-3 bg-gray-100 rounded-lg shadow-lg card overflow-auto sm:overflow-hidden sm:w-[36rem] lg:w-[48rem]">
            <img
                alt="Poster de Talentos Ocultos"
                className="w-72 col-span-3 sm:w-66 sm:col-span-1"
                src={images.poster2}
            />

            <div className="mx-6 my-8 flex flex-col col-span-3 sm:col-span-2 sm:overflow-auto">
                <div className='pr-2 max-h-2 grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:max-h-60 sm:text-sm'>
                    <div className='col-span-2 sm:col-span-1'>
                        <span className="font-bold">Título Original:</span> Hidden Figures
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <span className="font-bold">Duración:</span> 127 mins.
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <span className="font-bold">País:</span> Estados Unidos
                    </div>
                    <div className='col-span-2 sm:col-span-1'>
                        <span className="font-bold">Dirección:</span> Theodore Melfi
                    </div>
                    <div className='col-span-2'>
                        <span className="font-bold">Guión:</span> Allison Schroeder, basado en el libro de Margot Lee Shetterly
                    </div>
                    <div className='col-span-2'>
                        <span className="font-bold">Música:</span> Benjamin Wallfisch, Pharrell Williams y Hans Zimmer
                    </div>
                    <div className='col-span-2'>
                        <div className="font-bold">Sinopsis:</div>
                        <div className='mt-1 text-justify'>En la década de 1960, durante la carrera espacial entre Estados Unidos y la Unión Soviética, tres mujeres afroamericanas brillantes trabajan como matemáticas en la División Segregada de Cálculo del Centro de Investigación Langley de la NASA. Katherine Johnson, Dorothy Vaughan y Mary Jackson superan el sexismo y el racismo mientras calculan las trayectorias de vuelo, analizan los datos y programan las computadoras que hacen posible el éxito de las misiones espaciales, incluyendo el lanzamiento del astronauta John Glenn a la órbita terrestre.</div>
                    </div>
                    <div className='col-span-2'>
                        <div className="font-bold">Reparto:</div>
                        <div className='mt-1'>
                            Taraji P. Henson como Katherine Johnson<br />
                            Octavia Spencer como Dorothy Vaughan<br />
                            Janelle Monáe como Mary Jackson<br />
                            Kevin Costner como Al Harrison<br />
                            Kirsten Dunst como Vivian Mitchell<br />
                            Jim Parsons como Paul Stafford<br />
                            Glen Powell como John Glenn<br />
                            Mahershala Ali como Jim Johnson<br />
                        </div>
                    </div>
                    
                    <div className='pb-8 col-span-2 sm:pb-0'>
                        <div className="font-bold">Críticas:</div>
                        <div className='mt-3 text-center'>
                            <span className='italic'>Una película inspiradora y conmovedora que celebra el poder de la inteligencia y la perseverancia.</span><br />
                            <span className='text-[0.5rem] font-bold sm:text-xs'>Variety</span>
                        </div>
                        <div className='mt-3 text-center'>
                            <span className='italic'>Una historia importante que necesita ser contada.</span><br />
                            <span className='text-[0.5rem] font-bold sm:text-xs'>The Hollywood Reporter</span>
                        </div>
                        <div className='mt-3 text-center'>
                            <span className='italic'>Una película entretenida y bien hecha que te dejará sin aliento.</span><br />
                            <span className='text-[0.5rem] font-bold sm:text-xs'>Rolling Stone</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PagesLayout>
);

export default Index;
