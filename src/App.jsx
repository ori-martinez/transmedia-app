/* Router */
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter.jsx';

// CONSTANTES
/* Aplicación */
const App = () => (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
);

export default App;
