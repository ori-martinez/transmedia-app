/* Icons */
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';

// COMPONENTE
/* Contenedor para la Selección de Respuestas de la Trivia */
export const DivCheckTrivia = ({ element, item, onClick }) => (
    <div
        className={`p-1 grid grid-cols-8 gap-1 place-items-center border ${!element.selected ? element.isAnswer && item.done ? 'bg-emerald-light border-emerald text-emerald-dark' : 'bg-gray-100 border-gray font-medium cursor-pointer' : element.isAnswer ? 'bg-emerald-light border-emerald text-emerald-dark' : 'bg-ruby-light border-ruby text-ruby-dark'} rounded-md font-bold sm:gap-2 sm:p-2`}
        onClick={() => {
            // CONDICIONAL
            /* Comprobación del Estado de Listo de la Pregunta */
            if (!item.done) onClick(element, item);
        }}
    >
        <div>
            {// CONDICIONAL
            /* Comprobación de la Selección del Elemento como Respuesta */
            element.selected
                /* Comprobación del Estado de Respuesta Correcta del Elemento */
                ? element.isAnswer
                    ? (<FaCircleCheck className='w-5 h-5 text-emerald-dark' />)
                    : (<FaCircleXmark className='w-5 h-5 text-ruby-dark' />)
                /* Comprobación del Estado de Respuesta Correcta del Elemento y el Estado de Listo de la Pregunta */
                : element.isAnswer && item.done && (<FaCircleCheck className='w-5 h-5 text-emerald-dark' />)
            }
        </div>

        <p className='col-span-6 text-xs sm:text-base'>{ element.text }</p>
    </div>
);
