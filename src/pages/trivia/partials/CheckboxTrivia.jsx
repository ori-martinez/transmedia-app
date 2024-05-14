/* Icons */
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';

// COMPONENTE
/* Input Checkbox para la Selección de Respuestas para la Trivia */
export const CheckboxTrivia = ({ element, item, onChange }) => (
    <div className={`p-2 grid grid-cols-8 gap-2 place-items-center border ${!element.selected ? element.isAnswer && item.done ? 'bg-emerald-light border-emerald text-emerald-dark' : 'bg-gray-100 border-gray font-medium' : element.isAnswer ? 'bg-emerald-light border-emerald text-emerald-dark' : 'bg-ruby-light border-ruby text-ruby-dark'} rounded-md font-bold`}>
        {// CONDICIONAL
        /* Comprobación de la Selección del Elemento como Respuesta */
        !element.selected
            ? element.isAnswer && item.done
                ? (<FaCircleCheck className='w-5 h-5 text-emerald-dark' />)
                : (<input
                    className="w-4 h-4 accent-violet-500 focus:ring-none focus:outline-none"
                    disabled={item.done}
                    id={`element-${element.id}-checkbox`}
                    name="element"
                    onChange={() => onChange(element, item)}
                    type="checkbox"
                />)
            : element.isAnswer 
                ? (<FaCircleCheck className='w-5 h-5 text-emerald-dark' />)
                : (<FaCircleXmark className='w-5 h-5 text-ruby-dark' />)

        }

        <p className="col-span-7 text-xs sm:text-base">{ element.text }</p>
    </div>
);
