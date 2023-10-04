import { type ReactNode, type FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    element?: HTMLElement;
    children: ReactNode;
}

/**
 * @param element - Html element.
 * @param children - React node.
 */

export const Portal: FC<PortalProps> = (props) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
