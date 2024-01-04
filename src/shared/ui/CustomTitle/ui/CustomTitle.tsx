import { Typography } from 'antd';
import { type FC } from 'react';

import { type TitleProps } from '../types';

import { ClassNames } from 'shared/lib';

import cls from './CustomTitle.module.scss';

const { Title } = Typography;

/**
 * @param className - Class for controlling a component from outside
 * @param level - Header level
 * @param ariaLevel - Area level.
 * @param children - React node.
 * @param theme - Theme.
 */

export const CustomTitle: FC<TitleProps> = (props) => {
    const { className = '', children, level, theme = '', ariaLevel } = props;

    const mods: Record<string, boolean> = {
        [cls.h1]: level === 1,
        [cls.h2]: level === 2,
        [cls.h3]: level === 3,
    };

    return (
        <Title
            className={ClassNames(cls.customTitle, mods, [
                className,
                cls[theme],
            ])}
            aria-level={ariaLevel}
            level={level}
        >
            {children}
        </Title>
    );
};
