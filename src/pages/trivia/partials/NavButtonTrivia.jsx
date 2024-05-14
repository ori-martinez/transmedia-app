/* Icons */
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

// COMPONENTE
/* Botones de Navgeación entre las Preguntas de la Trivia */
export const NavButtonTrivia = ({ dataTrivia, setDataTrivia, item, setShow, sliceActual, setSliceActual, trivia }) => {
    // CONDICIONAL
    /* Comprobación del Slice Actual Diferente de 1 */
    if (sliceActual === 1) return (
        <div className="flex items-center justify-end">
            <button
                className="px-4 py-1 mt-4 inline-flex items-center bg-violet-500 rounded-full text-xs text-white font-bold transition-all ease-in-out disabled:bg-violet-500 hover:bg-violet-700 sm:text-sm"
                disabled={!item.done}
                onClick={() => setSliceActual(sliceActual + 1)}
                type="button"
            >
                Siguiente <FaAngleRight className='ml-1 w-3 h-3' />
            </button>
        </div>
    );

    // CONDICIONAL
    /* Comprobación del Slice Actual Diferente del Tamaño del Arreglo con las Preguntas de la Trivia */
    if (sliceActual === dataTrivia.length) return (
        <div className="flex items-center justify-between">
            <button
                className="px-4 py-1 mt-4 inline-flex items-center bg-violet-500 rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-violet-700 sm:text-sm"
                onClick={() => setSliceActual(sliceActual - 1)}
                type="button"
            >
                <FaAngleLeft className='mr-1 w-3 h-3' /> Anterior
            </button>
            <button
                className="px-4 py-1 mt-4 inline-flex items-center bg-emerald rounded-full text-xs text-white font-bold transition-all ease-in-out disabled:bg-emerald hover:bg-emerald-dark sm:text-sm"
                disabled={!item.done}
                onClick={() => {
                    setShow(true);
                    setDataTrivia(trivia);
                }}
                type="button"
            >
                Resultados
            </button>
        </div>
    );
    
    // RETORNO
    return (
        <div className="flex items-center justify-between">
            <button
                className="px-4 py-1 mt-4 inline-flex items-center bg-violet-500 rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-violet-700 sm:text-sm"
                onClick={() => setSliceActual(sliceActual - 1)}
                type="button"
            >
                <FaAngleLeft className='mr-1 w-3 h-3' /> Anterior
            </button>
            <button
                className="px-4 py-1 mt-4 inline-flex items-center bg-violet-500 rounded-full text-xs text-white font-bold transition-all ease-in-out disabled:bg-violet-500 hover:bg-violet-700 sm:text-sm"
                disabled={!item.done}
                onClick={() => setSliceActual(sliceActual + 1)}
                type="button"
            >
                Siguiente <FaAngleRight className='ml-1 w-3 h-3' />
            </button>
        </div>
    );
}
