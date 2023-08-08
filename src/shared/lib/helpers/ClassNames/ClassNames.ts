type Mods = Record<string, string | boolean>

export const ClassNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
    return [
        cls,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([classNames]) => classNames),
        ...additional.filter(Boolean),
    ].join(' ')
}
