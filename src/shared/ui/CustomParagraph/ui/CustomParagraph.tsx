import { type FC } from 'react';

import { type CustomParagraphProps } from '../types';

import { ClassNames } from 'shared/lib';

import cls from './CustomParagraph.module.scss';

/**
 * @param className - Class for controlling a component from outside.
 * @param theme - Paragraph theme.
 * @param children - React node.
 */

export const CustomParagraph: FC<CustomParagraphProps> = (props) => {
    const { className = '', children, theme, ...other } = props;

    return (
        <p
            className={ClassNames(cls.customParagraph, {}, [
                className,
                cls[theme],
            ])}
            {...other}
        >
            {children}
        </p>
    );
};
