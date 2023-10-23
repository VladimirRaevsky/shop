import { Typography } from 'antd';
import { type ReactNode, type FC } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './CustomTitle.module.scss';

const { Title } = Typography;

export const enum TitleLevel {
    ONE = 1,
    TWO = 2,
    THREE = 3,
}

export enum TitleTheme {
    PRIMARY = 'primary',
}

interface TitleProps {
    className?: string;
    children: ReactNode;
    level: TitleLevel;
    ariaLevel: TitleLevel;
    theme?: TitleTheme;
}

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
