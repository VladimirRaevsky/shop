import { type FC, useMemo, useState, useEffect } from 'react';

import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';
import { Theme, type ThemeProviderProps } from '../types';

const defaultTheme =
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({
    children,
    themeProps,
}) => {
    const [theme, setTheme] = useState<Theme>(themeProps ?? defaultTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = themeProps ?? theme;
    }, [theme, themeProps]);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
