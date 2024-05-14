/* Components */
import { HorizontalShowTransition } from '../../components/transitions/HorizontalShowTransition.jsx';
import { PagesLayout } from '../../components/layouts/PagesLayout.jsx';
/* Partials */
import { CheckboxTrivia } from './partials/CheckboxTrivia.jsx';
/* Hooks */
import { useEffect, useState } from 'react';
/* Utils */
import { trivia } from '../../utils/helpers.jsx';

// PÁGINA
/* Trivia */
const Index = () => {
    // CONSTANTES
    const [ dataTrivia, setDataTrivia ] = useState(trivia);             /* Arreglo con las Preguntas de la Trivia */
    const [ sliceActual, setSliceActual ] = useState(1);                /* Slice Actual de las Preguntas */
    const [ newDataTrivia, setNewDataTrivia ] = useState([]);           /* Nuevo Arreglo con las Preguntas para las Selecciones Erróneas */
    const [ total, setTotal ] = useState(0);                            /* Puntaje Total de la Trivia */

    // FUNCIONES
    /* Manejador del Cambio */
    const onChange = (element, item) => {
        // VARIABLES
        let newOptions = [ ...item.options, ]                   /* Nuevo Arreglo de Opciones */
        let elementIndex = newOptions.indexOf(element);         /* Index del Elemento Seleccionado */
        let newElement = { ...element, selected: true, }        /* Nuevo Elemento para las Opciones */

        newOptions.splice(elementIndex, 1, newElement);

        // VARIABLES
        let newDataTrivia = dataTrivia;                                     /* Nuevo Arreglo con las Preguntas */
        let newItem = { ...item, done: true, options: newOptions, }         /* Nuevo Item para las Preguntas */

        newDataTrivia.splice(item.id - 1, 1, newItem);
        setDataTrivia(newDataTrivia);

        // CONDICIONAL
        /* Comprobación de la Selección del Elemento de la Respuesta Correcta */
        if (element.isAnswer) {
            setDataTrivia(newDataTrivia);
            setTotal(total + 1);
        }
        else setNewDataTrivia(newDataTrivia);
    }

    useEffect(() => {
        // CONDICIONAL
        /* Comprobación de la Existencia de Registros en el Nuevo Arreglo con las Preguntas para las Selecciones Erróneas */
        if (newDataTrivia.length !== 0) {
            setDataTrivia(newDataTrivia);
            setNewDataTrivia([]);
        }
        
    }, [ newDataTrivia ]);

    // RETORNO
    return (
        <PagesLayout title='Trivia'>
            <div className="mx-8 mt-8">
                {dataTrivia.map((item) => (
                    <HorizontalShowTransition
                        className='w-96 sm:w-[36rem] lg:w-[48rem]'
                        key={item.id}
                        show={sliceActual === item.id}
                    >
                        <p className="mb-4 text-sm text-gray-800 text-center font-semibold sm:text-lg">{ item.question }</p>

                        <div className="p-8 grid grid-cols-2 gap-4 bg-gray bg-opacity-40 rounded-md">
                            {item.options.map((element, index) => (
                                <CheckboxTrivia
                                    element={element}
                                    item={item}
                                    key={index}
                                    onChange={onChange}
                                />
                            ))}
                        </div>
                    </HorizontalShowTransition>
                ))}
            </div>
        </PagesLayout>
    );
}

export default Index;
