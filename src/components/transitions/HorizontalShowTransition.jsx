/* Headless UI */
import { Transition } from '@headlessui/react';

// COMPONENTE
/* Transición de Derecha a Izquierda con Condición de Muestra */
export const HorizontalShowTransition = ({ children, className = '', show }) => {
    // RETORNO
    return (
        <Transition
            as='div'
            className={className}
            enter='transition duration-1000 ease-in-out zoom-in'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-1000 ease-in-out'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            show={show}
        >
            { children }
        </Transition>
    );
}
