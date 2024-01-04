import { type FC, useEffect, useCallback } from 'react';

import { type ModalProps } from '../types';

import { ClassNames } from 'shared/lib';
import { Portal } from 'shared/ui/Portal/ui/Portal';

import cls from './Modal.module.scss';

/**
 * @param className - Class for controlling a component from outside.
 * @param isOpen - Variable responsible for opening.
 * @param children - React node.
 * @param onClose - Function responsible for closing.
 */

export const Modal: FC<ModalProps> = (props) => {
    const { className = '', isOpen, onClose, children } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const onCloseHandler = useCallback(() => {
        if (onClose != null) {
            onClose();
        }
    }, [onClose]);

    const onContentClickHandler = (e: React.MouseEvent): void => {
        e.stopPropagation();
    };

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onCloseHandler();
            }
        },
        [onCloseHandler],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={ClassNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={onCloseHandler}>
                    <div
                        className={cls.content}
                        onClick={onContentClickHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
