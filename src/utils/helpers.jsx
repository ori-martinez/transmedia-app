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

// FUNCIONES
/* Mensajes según el Total Obtenido en la Trivia */
export const getMessageTotal = (total) => {
    // VARIABLES
    let fanTitle = '';          /* Título de Fan */
    let message = '';           /* Mensaje */

    // CONDICIONAL
    /* Comprobación del Total Igual que 0 */
    if (total === 0) {
        fanTitle = 'Cero Fan';
        message = 'Parece que aún no has descubierto los secretos de Talentos Ocultos. No te preocupes, siempre puedes volver a ver la película y aprender más sobre estas increíbles mujeres. ¡Sigue intentándolo!';
    }
    /* Comprobación del Total Mayor que 0 y Menor o Igual que 4 */
    else if (total > 0 && total <= 4) {
        fanTitle = 'Fan Casual';
        message = '¡Buen trabajo! Has demostrado un conocimiento básico sobre Talentos Ocultos. Sigue explorando la historia de estas mujeres extraordinarias y verás cómo tu conocimiento crece.';
    }
    /* Comprobación del Total Mayor que 4 y Menor o Igual que 8 */
    else if (total > 4 && total <= 8) {
        fanTitle = 'Fan Honorable';
        message = '¡Impresionante! Tu conocimiento sobre Talentos Ocultos es notable. Eres un verdadero fan y claramente aprecias la historia de estas mujeres pioneras. ¡Sigue así!';
    }
    /* Comprobación del Total Mayor que 8 y Menor o Igual que 12 */
    else if (total > 8 && total <= 12) {
        fanTitle = 'Mega Fan';
        message = '¡Increíble! Tu conocimiento sobre Talentos Ocultos es excepcional. Eres un verdadero experto en la película y en la historia de estas mujeres inspiradoras. ¡Felicidades, eres un Mega Fan!';
    }

    // RETORNO
    return { fanTitle, message }
}
