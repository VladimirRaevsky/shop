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

interface TitleProps {
    className?: string;
    children: ReactNode;
    level: TitleLevel;
    ariaLevel: TitleLevel;
}

export const CustomTitle: FC<TitleProps> = (props) => {
    const { className = '', children, level, ariaLevel } = props;

    const mods: Record<string, boolean> = {
        [cls.h1]: level === 1,
        [cls.h2]: level === 2,
        [cls.h3]: level === 3,
    };

    return (
        <Title
            className={ClassNames(cls.customTitle, mods, [className])}
            aria-level={ariaLevel}
            level={level}
            style={{ margin: 0, fontWeight: 'inherit' }}
        >
            {children}
        </Title>
    );
};
