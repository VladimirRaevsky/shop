import { type ReactNode } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export interface ThemeProviderProps {
    children?: ReactNode;
    themeProps?: Theme;
}
