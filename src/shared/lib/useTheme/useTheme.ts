import { useContext } from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from 'app/providers/ThemeProviders/lib/ThemeContext'

export interface UseThemeResult {
    theme: string
    themeToggleHandler: () => void
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const themeToggleHandler = (): void => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK

        setTheme(newTheme)

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        themeToggleHandler,
    }
}
