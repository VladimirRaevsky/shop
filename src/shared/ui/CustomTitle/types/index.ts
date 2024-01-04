import { type ReactNode } from 'react';

export const enum TitleLevel {
    ONE = 1,
    TWO = 2,
    THREE = 3,
}

export enum TitleTheme {
    PRIMARY = 'primary',
}

export interface TitleProps {
    className?: string;
    children: ReactNode;
    level: TitleLevel;
    ariaLevel: TitleLevel;
    theme?: TitleTheme;
}
