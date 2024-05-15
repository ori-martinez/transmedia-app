/* Components */
import { PagesLayout } from '../../components/layouts/PagesLayout.jsx';
/* Partials */
import { DivCheckTrivia } from './partials/DivCheckTrivia.jsx';
import { NavButtonTrivia } from './partials/NavButtonTrivia.jsx';
/* Icons */
import { CgSync } from 'react-icons/cg';
import { IoLogoWhatsapp } from 'react-icons/io';
/* Hooks */
import { useEffect, useState } from 'react';
/* Utils */
import { getMessageTotal } from '../../utils/helpers.jsx';

// PÁGINA
/* Trivia */
const Index = () => {
    // CONSTANTES
    const [ dataTrivia, setDataTrivia ] = useState([                    /* Arreglo con las Preguntas de la Trivia */
        {
            id: 1,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: '1990', },
                { isAnswer: true, selected: false, text: '1960', },
                { isAnswer: false, selected: false, text: '1880', },
                { isAnswer: false, selected: false, text: '1970', },
            ],
            question: '¿En qué decada ocurrieron los hechos de la película?',
        },
        {
            id: 2,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'Charleston, South Carolina', },
                { isAnswer: false, selected: false, text: 'Houston, Texas', },
                { isAnswer: false, selected: false, text: 'New York City, New York', },
                { isAnswer: true, selected: false, text: 'Hampton, Virginia', },
            ],
            question: '¿En dónde se desarrolla la película?',
        },
        {
            id: 3,
            done: false,
            options: [
                { isAnswer: true, selected: false, text: 'National Aeronautics and Space Administration (NASA)', },
                { isAnswer: false, selected: false, text: 'The Planetary Society (TPS)', },
                { isAnswer: false, selected: false, text: 'National Hurricane Center (NHC)', },
                { isAnswer: false, selected: false, text: 'National Science Foundation (NSF)', },
            ],
            question: '¿Dónde trabajan Katherine, Mary y Dorothy?',
        },
        {
            id: 4,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'No le importaba su trabajo.', },
                { isAnswer: true, selected: false, text: 'Para poder usar el baño de gente color.', },
                { isAnswer: false, selected: false, text: 'Para ver al novio.', },
                { isAnswer: false, selected: false, text: 'Para fumar y beber.', },
            ],
            question: '¿Por qué Katherine salía de su trabajo por periodos de 40 minutos?',
        },
        {
            id: 5,
            done: false,
            question: '¿Por qué Dorothy estaba nerviosa por la nueva computadora IBM 7090 en la NASA?',
            options: [
                { isAnswer: false, selected: false, text: 'Era un peligro para el edificio.', },
                { isAnswer: false, selected: false, text: 'No sabía para que servía la computadora.', },
                { isAnswer: true, selected: false, text: 'Podría dejar sin empleo a todo su departamento.', },
                { isAnswer: false, selected: false, text: 'Porque consideraba que era un dispositivo del demonio.', },
            ],
        },
        {
            id: 6,
            done: false,
            question: 'Verdadero o Falso: Los Estados Unidos fue el primer país en poner al hombre en el ESPACIO',
            options: [
                { isAnswer: false, selected: false, text: 'Verdadero', },
                { isAnswer: true, selected: false, text: 'Falso', },
            ],
        },
        {
            id: 7,
            done: false,
            question: '¿Qué quería lograr Mary cuando fue a la corte?',
            options: [
                { isAnswer: true, selected: false, text: 'Obtener permiso para tomar clases en una escuela de blancos.', },
                { isAnswer: false, selected: false, text: 'Quería que la NASA se deshiciera de la nueva computadora de IBM.', },
                { isAnswer: false, selected: false, text: 'Divorciarse de su esposo.', },
                { isAnswer: false, selected: false, text: 'Quería permiso para ir a la escuela y obtener su diploma de "High School".', },
            ],
        },
        {
            id: 8,
            done: false,
            question: 'Antes de que el cohete despegue, ¿a quién le pide John Glenn que resuelva el problema matemático?',
            options: [
                { isAnswer: false, selected: false, text: 'a Harrison', },
                { isAnswer: false, selected: false, text: 'Cancela el lanzamiento porque nadie resuelve el problema.', },
                { isAnswer: false, selected: false, text: 'a Dorothy', },
                { isAnswer: true, selected: false, text: 'a Katherine', },
            ],
        },
        {
            id: 9,
            done: false,
            question: '¿Qué método antiguo se sugirió para resolver el problema matemático?',
            options: [
                { isAnswer: false, selected: false, text: 'Teorema de Pitágoras', },
                { isAnswer: true, selected: false, text: 'Método de Euler', },
                { isAnswer: false, selected: false, text: 'Ecuaciones Diferenciales', },
                { isAnswer: false, selected: false, text: 'Leyes de Newton', },
            ],
        },
        {
            id: 10,
            done: false,
            question: '¿Cuando mueven a Katherine a su antiguo departamento, que regalo le da el "Space Task Force"?',
            options: [
                { isAnswer: false, selected: false, text: 'Un cheque por $1,000 dólares', },
                { isAnswer: false, selected: false, text: 'Unos aretes de diamantes', },
                { isAnswer: true, selected: false, text: 'Un collar de perlas', },
                { isAnswer: false, selected: false, text: 'Una cafetera', },
            ],
        },
        {
            id: 11,
            done: false,
            question: '¿Qué lenguaje computacional tuvo que aprender Dorothy para operar la computadora de la IBM?',
            options: [
                { isAnswer: true, selected: false, text: 'Fortran', },
                { isAnswer: false, selected: false, text: 'C+', },
                { isAnswer: false, selected: false, text: 'Microsoft', },
                { isAnswer: false, selected: false, text: 'Google', },
            ],
        },
        {
            id: 12,
            done: false,
            question: '¿Cuál era el título del puesto de Katherine en la NASA?',
            options: [
                { isAnswer: false, selected: false, text: 'Escritora', },
                { isAnswer: false, selected: false, text: 'Secretaria', },
                { isAnswer: true, selected: false, text: 'Computadora', },
                { isAnswer: false, selected: false, text: 'Calculadora', },
            ],
        },
    ]);
    const [ newDataTrivia, setNewDataTrivia ] = useState([]);           /* Nuevo Arreglo con las Preguntas para las Selecciones Erróneas */
    const [ sliceActual, setSliceActual ] = useState(1);                /* Slice Actual de las Preguntas */
    const [ total, setTotal ] = useState(0);                            /* Puntaje Total de la Trivia */
    const [ show, setShow ] = useState(false);                          /* Estado de Muestra de los Resultados */

    // FUNCIONES
    /* Manejador del Click */
    const onClick = (element, item) => {
        // VARIABLES
        let newOptions = [ ...item.options, ]                   /* Nuevo Arreglo de Opciones */
        let elementIndex = newOptions.indexOf(element);         /* Index del Elemento Seleccionado */
        let newElement = { ...element, selected: true, }        /* Nuevo Elemento para las Opciones */

        newOptions.splice(elementIndex, 1, newElement);

        // VARIABLES
        let newData = dataTrivia;                                           /* Nuevo Arreglo con las Preguntas */
        let newItem = { ...item, done: true, options: newOptions, }         /* Nuevo Item para las Preguntas */

        newData.splice(item.id - 1, 1, newItem);
        setDataTrivia(newData);

        // CONDICIONAL
        /* Comprobación de la Selección del Elemento de la Respuesta Correcta */
        if (element.isAnswer) {
            setDataTrivia(newData);
            setTotal(total + 1);
        }
        else setNewDataTrivia(newData);
    }

    /* Funcionalidad de Muestra de los Resultados */
    const showResults = () => {
        // VARIABLES
        /* Nuevo Arreglo con las Preguntas */
        let newData = [];

        dataTrivia.forEach((item) => {
            // VARIABLES
            /* Nuevo Arreglo de Opciones */
            let newOptions = [];

            item.options.forEach((element) => newOptions.push({ ...element, selected: false, }));
            newData.push({ ...item, done: false, options: newOptions, });
        });
        setNewDataTrivia(newData);
        setShow(true);
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
                {// CONDICIONAL
                /* Comprobación del Estado de Muestra de los Resultados */
                !show
                    ? dataTrivia.map((item) => (
                        <div className={`w-96 sm:w-[36rem] lg:w-[48rem] ${sliceActual !== item.id && 'hidden'}`} key={item.id}>
                            <p className="mb-4 text-sm text-gray-800 text-center font-semibold sm:text-lg">{ item.question }</p>

                            <div className="p-8 grid gap-4 bg-gray bg-opacity-40 rounded-md sm:grid-cols-2">
                                {item.options.map((element, index) => (
                                    <DivCheckTrivia
                                        element={element}
                                        item={item}
                                        key={index}
                                        onClick={onClick}
                                    />
                                ))}
                            </div>
                            
                            <NavButtonTrivia
                                dataTrivia={dataTrivia}
                                item={item}
                                showResults={showResults}
                                sliceActual={sliceActual}
                                setSliceActual={setSliceActual}
                            />
                        </div>
                    ))
                    : (
                        <div className="w-96 sm:w-[36rem] lg:w-[48rem] flex flex-col items-center justify-center">
                            <p className="mb-2 text-2xl text-violet-500 font-bold font-basker sm:text-3xl">{ getMessageTotal(total).fanTitle }</p>
                            <p className="mb-4 text-sm text-gray-800 sm:text-base">{ getMessageTotal(total).message }</p>
                            <p className="mb-8 text-base sm:text-xl">
                                <span className="text-blue-light font-bold">Total de Aciertos:</span> { total }
                            </p>

                            <div className="w-full flex items-center justify-around">
                                <button
                                    className="px-4 py-1 mt-4 inline-flex items-center bg-violet-500 rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-violet-700 sm:text-sm"
                                    onClick={() => location.reload()}
                                    type="button"
                                >
                                    <CgSync className='mr-1 w-4 h-4' /> Repetir
                                </button>
                                <button
                                    className="px-4 py-1 mt-4 inline-flex items-center bg-emerald rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-emerald-dark sm:text-sm"
                                    type="button"
                                >
                                    Compartir <IoLogoWhatsapp className='ml-1 w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </PagesLayout>
    );
}

export default Index;
