import { lazy, Suspense } from 'react';
/* Router */
import { Route, Routes } from 'react-router-dom';
/* Pages */
const Home = lazy(() => import('../pages/Home.jsx'));
const IndexActrices = lazy(() => import('../pages/actrices/Index.jsx'));
const IndexFichaTecnica = lazy(() => import('../pages/ficha-tecnica/Index.jsx'));
const IndexTrivia = lazy(() => import('../pages/trivia/Index.jsx'));

// ROUTER
/* Rutas de la Aplicación */
export const AppRouter = () => (
    <Routes>
        {/* Inicio */}
        <Route
            element={
                <Suspense fallback={<>...</>}>
                    <Home />
                </Suspense>
            } 
            path='/'
        />

        {/* Actrices Principales */}
        <Route
            element={
                <Suspense fallback={<>...</>}>
                    <IndexActrices />
                </Suspense>
            } 
            path='/actrices'
        />

        {/* Ficha Técnica de la Película */}
        <Route
            element={
                <Suspense fallback={<>...</>}>
                    <IndexFichaTecnica />
                </Suspense>
            } 
            path='/ficha-tecnica'
        />

        {/* Trivia */}
        <Route
            element={
                <Suspense fallback={<>...</>}>
                    <IndexTrivia />
                </Suspense>
            } 
            path='/trivia'
        />
    </Routes>
);
