/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    plugins: [],
    theme: {
        extend: {
            colors: {
                'blue': {
                    light: '#0C46DB',
                    DEFAULT: '#0833A2',
                    dark: '#062166',
                },
                'emerald': {
                    light: '#6DFB9D',
                    DEFAULT: '#1ECD59',
                    dark: '#169742',
                },
                'gray': { DEFAULT: '#BDBDBD', },
                'ruby': {
                    light: '#FA6E6E',
                    DEFAULT: '#CD2222',
                    dark: '#A40707',
                },
            },
            fontFamily: {
                'basker': [ '"Baskervville"', ],
                'mont': [ '"Montserrat"', ],
            },
        },
    },
}
