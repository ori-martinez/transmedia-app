/* Components */
import { PagesLayout } from '../../components/layouts/PagesLayout.jsx';
/* Partials */
import { CheckboxTrivia } from './partials/CheckboxTrivia.jsx';
import { NavButtonTrivia } from './partials/NavButtonTrivia.jsx';
/* Hooks */
import { useEffect, useState } from 'react';
/* Utils */
import { trivia } from '../../utils/helpers.jsx';

// PÁGINA
/* Trivia */
const Index = () => {
    // CONSTANTES
    const [ dataTrivia, setDataTrivia ] = useState(trivia);             /* Arreglo con las Preguntas de la Trivia */
    const [ newDataTrivia, setNewDataTrivia ] = useState([]);           /* Nuevo Arreglo con las Preguntas para las Selecciones Erróneas */
    const [ sliceActual, setSliceActual ] = useState(1);                /* Slice Actual de las Preguntas */
    const [ total, setTotal ] = useState(0);                            /* Puntaje Total de la Trivia */
    const [ show, setShow ] = useState(false);                          /* Estado de Muestra de los Resultados */

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
    };

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
                {// CONDICIONAL
                /* Comprobación del Estado de Muestra de los Resultados */
                !show
                    ? dataTrivia.map((item) => (
                        <div className={`w-96 sm:w-[36rem] lg:w-[48rem] ${sliceActual !== item.id && 'hidden'}`} key={item.id}>
                            <p className="mb-4 text-sm text-gray-800 text-center font-semibold sm:text-lg">{ item.question }</p>

                            <div className="p-8 grid gap-4 bg-gray bg-opacity-40 rounded-md sm:grid-cols-2">
                                {item.options.map((element, index) => (
                                    <CheckboxTrivia
                                        element={element}
                                        item={item}
                                        key={index}
                                        onChange={onChange}
                                    />
                                ))}
                            </div>
                            
                            <NavButtonTrivia
                                dataTrivia={dataTrivia}
                                setDataTrivia={setDataTrivia}
                                item={item}
                                setShow={setShow}
                                sliceActual={sliceActual}
                                setSliceActual={setSliceActual}
                                trivia={trivia}
                            />
                        </div>
                    ))
                    : (
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-sm sm:text-base">
                                <span className="text-blue-light font-bold">Total de Aciertos:</span> { total }
                            </p>
                            <p className="text-xl text-violet-500 sm:text-2xl">Título de Fan</p>
                            <p className="text-sm sm:text-base"></p>
                            
                        </div>
                    )
                }
            </div>
        </PagesLayout>
    );
}

export default Index;
