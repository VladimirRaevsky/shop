import { type ReactNode, type FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    element?: HTMLElement;
    children: ReactNode;
}

export const Portal: FC<PortalProps> = (props) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
