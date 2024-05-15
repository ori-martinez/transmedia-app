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
        birthday: '11/07/1970',
        description: [
            'Su debut cinematográfico fue en la película policíaca Streetwise (1998). Su primer papel destacado fue en la película de comedia dramática del 2001 Baby Boy, donde interpretó a Yvette. Posteriormente, Henson ganó reconocimiento por interpretar a una prostituta en Hustle & Flow (2005) y a una madre soltera en The Curious Case of Benjamin Button (2008) de David Fincher. Esto último le valió una nominación al Premio de la Academia a la Mejor Actriz de Reparto.',
            'En el 2016, interpretó a la matemática Katherine Johnson en Hidden Figures.  También ha actuado en  The Karate Kid (2010), Think Like a Man (2012), Acrimony (2018), What Men Want (2019), The Best of Enemies (2019) y The Color Purple (2023).',
            'Ha recibido varios reconocimientos, incluyendo un Globo de Oro, así como nominaciones a un Premio de la Academia, un Premio Tony y cuatro Premios Primetime Emmy.',
        ],
        image: images.actress1,
        name: 'Taraji P. Henson',
        rol: 'Katherine Johnson',
    },
    {
        id: 2,
        birthday: '25/05/1970',
        description: [
            'Spencer hizo su debut cinematográfico en el drama de 1996 A Time to Kill. Después de una década de breves papeles en cine y televisión, su gran avance llegó en 2011 cuando interpretó a una sirvienta en los Estados Unidos de la década de 1960 en la película dramática The Help, que le valió el Premio de la Academia a la Mejor Actriz de Reparto.',
            'Otros de los proyectos que ha protagonizado son The Divergent Series (2015-16), The Shack (2017), Gifted (2017), Instant Family (2018), Luce (2019), Ma (2019), Onward (2020) y Spirited (2022).',
            'Ha recibido varios reconocimientos, entre ellos un Premio de la Academia, un Premio de la Academia Británica de Cine y un Globo de Oro, además de una nominación a un Premio Primetime Emmy.',
        ],
        image: images.actress2,
        name: 'Octavia Spencer',
        rol: 'Dorothy Vaughan',
    },
    {
        id: 3,
        birthday: '01/12/1985',
        description: [
            'Es una cantante, compositora, rapera y actriz estadounidense. Ha recibido diez nominaciones a los premios Grammy, y ha recibido un premio del Sindicato de Actores y un premio Emmy para niños y familias. Monáe también ha sido honrada con el Premio ASCAP Vanguard, así como con el Premio Rising Star (2015) y el Premio Trailblazer of the Year (2018) de Billboard Women in Music. ',
            'En octubre de 2016, Monáe hizo su debut como actriz en la pantalla grande en la película aclamada por la crítica Moonlight, junto a Naomie Harris, André Holland y Mahershala Ali. También, ha protagonizado las películas Harriet (2019) y Glass Onion (2022), y la serie de televisión Homecoming (2020).',
        ],
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
