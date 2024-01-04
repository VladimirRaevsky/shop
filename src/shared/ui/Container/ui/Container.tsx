import { type FC } from 'react';

import { type ContainerProps } from '../types';

import { ClassNames } from 'shared/lib';

import cls from './Container.module.scss';

/**
 * @param className - Class for controlling a component from outside.
 * @param children - React node.
 */

export const Container: FC<ContainerProps> = (props) => {
    const { className = '', children } = props;

    return (
        <div className={ClassNames(cls.container, {}, [className])}>
            {children}
        </div>
    );
};
