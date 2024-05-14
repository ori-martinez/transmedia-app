/* Hooks */
import { useEffect, useState } from 'react';
/* Headless UI */
import { Transition } from '@headlessui/react';

// COMPONENTE
/* Transición hacia Arriba */
export const UpTransition = ({ children, className = '' }) => {
    // CONSTANTES
    /* Estado del Renderizado de la Transición */
    const [ initialRender, setInitialRender ] = useState(false);

    useEffect(() => setInitialRender(true), []);

    // RETORNO
    return (
        <Transition
            as='div'
            className={className}
            enter='transition transform duration-1000 ease-in-out zoom-in'
            enterFrom='translate-y-4 opacity-0'
            enterTo='translate-y-0 opacity-100'
            leave='transition-opacity duration-1000 ease-in-out'
            leaveFrom='translate-y-0 opacity-100'
            leaveTo='translate-y-4 opacity-0' 
            show={initialRender}
        >
            { children }
        </Transition>
    );
}
