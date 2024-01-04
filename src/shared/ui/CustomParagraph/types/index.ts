import { type ReactNode } from 'react';

export enum CustomParagraphTheme {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
    ERROR = 'error',
}

export interface CustomParagraphProps {
    className?: string;
    theme: CustomParagraphTheme;
    children: ReactNode;
}
