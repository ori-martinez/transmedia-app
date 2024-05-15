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
/* React Copy to Clipboard */
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
            options: [
                { isAnswer: false, selected: false, text: 'Era un peligro para el edificio.', },
                { isAnswer: false, selected: false, text: 'No sabía para que servía la computadora.', },
                { isAnswer: true, selected: false, text: 'Podría dejar sin empleo a todo su departamento.', },
                { isAnswer: false, selected: false, text: 'Porque consideraba que era un dispositivo del demonio.', },
            ],
            question: '¿Por qué Dorothy estaba nerviosa por la nueva computadora IBM 7090 en la NASA?',
        },
        {
            id: 6,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'Verdadero', },
                { isAnswer: true, selected: false, text: 'Falso', },
            ],
            question: 'Verdadero o Falso: Los Estados Unidos fue el primer país en poner al hombre en el ESPACIO',
        },
        {
            id: 7,
            done: false,
            options: [
                { isAnswer: true, selected: false, text: 'Obtener permiso para tomar clases en una escuela de blancos.', },
                { isAnswer: false, selected: false, text: 'Quería que la NASA se deshiciera de la nueva computadora de IBM.', },
                { isAnswer: false, selected: false, text: 'Divorciarse de su esposo.', },
                { isAnswer: false, selected: false, text: 'Quería permiso para ir a la escuela y obtener su diploma de "High School".', },
            ],
            question: '¿Qué quería lograr Mary cuando fue a la corte?',
        },
        {
            id: 8,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'a Harrison', },
                { isAnswer: false, selected: false, text: 'Cancela el lanzamiento porque nadie resuelve el problema.', },
                { isAnswer: false, selected: false, text: 'a Dorothy', },
                { isAnswer: true, selected: false, text: 'a Katherine', },
            ],
            question: 'Antes de que el cohete despegue, ¿a quién le pide John Glenn que resuelva el problema matemático?',
        },
        {
            id: 9,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'Fórmula Frenet', },
                { isAnswer: true, selected: false, text: 'Método de Euler', },
                { isAnswer: false, selected: false, text: 'Algoritmo de Ortonormalización', },
                { isAnswer: false, selected: false, text: 'Teorema de Euclides', },
            ],
            question: '¿Con qué artificio o fórmula matemática logra Katherine y el "Space Task Force" resolver el problema del cambio de órbita para el reingreso?',
        },
        {
            id: 10,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'Un cheque por $1,000 dólares', },
                { isAnswer: false, selected: false, text: 'Unos aretes de diamantes', },
                { isAnswer: true, selected: false, text: 'Un collar de perlas', },
                { isAnswer: false, selected: false, text: 'Una cafetera', },
            ],
            question: '¿Cuando mueven a Katherine a su antiguo departamento, que regalo le da el "Space Task Force"?',
        },
        {
            id: 11,
            done: false,
            options: [
                { isAnswer: true, selected: false, text: 'Fortran', },
                { isAnswer: false, selected: false, text: 'Comtran', },
                { isAnswer: false, selected: false, text: 'Cobol', },
                { isAnswer: false, selected: false, text: 'Assembly', },
            ],
            question: '¿Qué lenguaje computacional tuvo que aprender Dorothy para operar la computadora de la IBM?',
        },
        {
            id: 12,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'Escritora', },
                { isAnswer: false, selected: false, text: 'Secretaria', },
                { isAnswer: true, selected: false, text: 'Computadora', },
                { isAnswer: false, selected: false, text: 'Calculadora', },
            ],
            question: '¿Cuál era el título del puesto de Katherine en la NASA?',
        },
        {
            id: 13,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'Freedom', },
                { isAnswer: true, selected: false, text: ' Friendship 7', },
                { isAnswer: false, selected: false, text: 'Sputnik', },
                { isAnswer: false, selected: false, text: 'Redstone', },
            ],
            question: '¿Cómo se llamaba la cápsula donde John Glenn iba a bordo?',
        },
        {
            id: 14,
            done: false,
            options: [
                { isAnswer: false, selected: false, text: 'Bill J. Clinton', },
                { isAnswer: false, selected: false, text: 'Richard M. Nixon', },
                { isAnswer: true, selected: false, text: 'John F. Kennedy', },
                { isAnswer: false, selected: false, text: 'Jimmy Carter Jr.', },
            ],
            question: '¿Cuál fue el presidente de los Estados Unidos durante los eventos finales de la película??',
        },
        {
            id: 15,
            done: false,
            options: [
                { isAnswer: true, selected: false, text: '2017', },
                { isAnswer: false, selected: false, text: '2018', },
                { isAnswer: false, selected: false, text: '2015', },
                { isAnswer: false, selected: false, text: '2014', },
            ],
            question: '¿En qué año se estrenó internacionalmente la película?',
        },
    ]);
    const [ newDataTrivia, setNewDataTrivia ] = useState([]);           /* Nuevo Arreglo con las Preguntas para las Selecciones Erróneas */
    const [ sliceActual, setSliceActual ] = useState(1);                /* Slice Actual de las Preguntas */
    const [ total, setTotal ] = useState(0);                            /* Puntaje Total de la Trivia */
    const [ show, setShow ] = useState(false);                          /* Estado de Muestra de los Resultados */
    const [ clipboard, setClipboard ] = useState({                      /* Portapapeles  */
        copied: false,
        value: `¡Hola! 🚀

Te reto a demostrar cuánto sabes sobre la película _*Talentos Ocultos*_. ¿Aceptas el desafío? 🎬🍿 Haz clic en el siguiente enlace para realizar una trivia sobre la película: https://talentosocultosfans.vercel.app/. No te preocupes, no es tan difícil como lanzar un cohete al espacio. 😉
            
¡Buena suerte! Y no olvides compartir tus resultados. 😉`,
    });

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

    useEffect(() => {
        // CONDICIONAL
        /* Comprobación del Estado de Copiado del Portapapeles */
        if (clipboard.copied) setTimeout(() => setClipboard({ ...clipboard, copied: false, }), 5000);
    }, [ clipboard ]);

    // RETORNO
    return (
        <PagesLayout title='Trivia'>
            <div className="mx-8 mt-8">
                {// CONDICIONAL
                /* Comprobación del Estado de Muestra de los Resultados */
                !show
                    ? dataTrivia.map((item) => (
                        <div className={`w-80 sm:w-[36rem] lg:w-[48rem] ${sliceActual !== item.id && 'hidden'}`} key={item.id}>
                            <p className="mb-4 text-sm text-gray-800 text-center font-semibold sm:text-lg">
                                <span className="text-violet-500">({ item.id }/{ dataTrivia.length })</span> { item.question }
                            </p>

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
                        <div className="w-80 sm:w-[36rem] lg:w-[48rem] flex flex-col items-center justify-center">
                            <div className="px-2 mb-2 relative inline-block">
                                <div className="absolute inset-0 transform -skew-x-12 bg-gray-300" />
                                        
                                <span className="relative text-2xl text-violet-500 font-bold font-basker sm:text-3xl">{ getMessageTotal(total).fanTitle }</span>
                            </div>
                            
                            <p className="mb-4 text-sm text-gray-800 text-center sm:text-base">{ getMessageTotal(total).message }</p>
                            <p className="mb-8 text-base sm:text-xl">
                                <span className="text-blue-light font-bold">Total de Aciertos:</span> { total }
                            </p>

                            <div className="w-full flex items-center justify-around">
                                <button
                                    className="px-4 py-1 mt-4 inline-flex items-center bg-violet-500 rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-violet-700 sm:text-sm"
                                    onClick={() => location.reload()}
                                    type="button"
                                >
                                    <CgSync className='mr-1 w-5 h-5' /> Repetir
                                </button>

                                <div className="flex flex-col items-center justify-center">
                                    <CopyToClipboard onCopy={() => setClipboard({ ...clipboard, copied: true, })} text={clipboard.value}>
                                        <button className="px-4 py-1 mt-4 inline-flex items-center bg-emerald rounded-full text-xs text-white font-bold transition-all ease-in-out hover:bg-emerald-dark sm:text-sm" type="button">
                                            Compartir <IoLogoWhatsapp className='ml-1 w-4 h-4' />
                                        </button>
                                    </CopyToClipboard>

                                    {// CONDICIONAL
                                    /* Comprobación del Estado de Copiado del Portapapeles */
                                    clipboard.copied && (<div className="text-xs text-blue-dark sm:text-sm">Mensaje Copiado!</div>)}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </PagesLayout>
    );
}

export default Index;
