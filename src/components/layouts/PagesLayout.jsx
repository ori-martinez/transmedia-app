/* Components */
import { BasicHeader } from '../headers/BasicHeader.jsx';
import { Footer } from '../Footer.jsx';
import { UpTransition } from '../transitions/UpTransition.jsx';

// COMPONENTES
/* Plantilla de las Páginas */
export const PagesLayout = ({ children, title }) =>(
    <div className='relative min-h-screen font-mont'>
        {/* Cabecera */}
        <BasicHeader />

        <UpTransition className='z-0 absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className="text-3xl text-blue-dark text-center font-extrabold sm:text-4xl">{ title }</h1>

            { children }
        </UpTransition>

        <div className="w-full absolute bottom-0">
            {/* Pie de Página */}
            <Footer />
        </div>
    </div>
);
