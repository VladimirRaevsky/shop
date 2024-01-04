import { useContext } from 'react';

import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProviders/lib/ThemeContext';

import { type UseThemeResult } from './types';

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeToggleHandler = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme(newTheme);

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme,
        themeToggleHandler,
    };
}
