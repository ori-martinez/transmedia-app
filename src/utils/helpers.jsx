/* Images */
import actress1 from '../assets/actresses/1.jpg';
import actress2 from '../assets/actresses/2.jpg';
import actress3 from '../assets/actresses/3.jpg';
import logo from '../assets/logo.png';
import poster1 from '../assets/poster1.png';
import poster2 from '../assets/poster2.png';

// HELPERS

// CONSTANTES
/* Imágenes */
export const images = { actress1, actress2, actress3, logo, poster1, poster2, }

/* Links de Navegación */
export const navLinks = [
    { pathname: '/ficha-tecnica', title: 'Ficha Técnica', },
    { pathname: '/actrices', title: 'Actrices Principales', },
    { pathname: '/trivia', title: 'Trivia', },
]

/* Pestañas de las Actrices */
export const tabsActresses = [
    {
        id: 1,
        image: images.actress1,
        name: 'Taraji P. Henson',
        rol: 'Katherine Johnson',
    },
    {
        id: 2,
        image: images.actress2,
        name: 'Octavia Spencer',
        rol: 'Dorothy Vaughan',
    },
    {
        id: 3,
        image: images.actress3,
        name: 'Janelle Monáe',
        rol: 'Mary Jackson',
    }
]

/* Preguntas de la Trivia */
export const trivia = [
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
        question: 'Verdadero o Falso: Los Estados Unidos fue el primer país en poner al hombre en el ESPACIO',
        options: [
            { isAnswer: false, selected: false, text: 'Verdadero', },
            { isAnswer: true, selected: false, text: 'Falso', },
        ],
    },
    {
        id: 7,
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
        question: '¿Cuál era el título del puesto de Katherine en la NASA?',
        options: [
            { isAnswer: false, selected: false, text: 'Escritora', },
            { isAnswer: false, selected: false, text: 'Secretaria', },
            { isAnswer: true, selected: false, text: 'Computadora', },
            { isAnswer: false, selected: false, text: 'Calculadora', },
        ],
    },
]
