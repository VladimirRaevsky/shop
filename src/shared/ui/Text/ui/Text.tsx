import { type FC } from 'react';

import { ClassNames } from 'shared/lib';
import { CustomTitle } from 'shared/ui/CustomTitle';
import { TitleLevel } from 'shared/ui/CustomTitle/ui/CustomTitle';

import cls from './Text.module.scss';

export enum TextTheme {
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    description?: string;
    theme?: TextTheme;
}

/**
 * @param className - Class for controlling a component from outside
 * @param title - Text title
 * @param description - Text description.
 * @param theme - Text theme.
 */

export const Text: FC<TextProps> = (props) => {
    const { className = '', title, theme = '', description, ...other } = props;

    const mods: Record<string, boolean> = {
        [cls.error]: theme === TextTheme.ERROR,
    };

    return (
        <div className={ClassNames(cls.text, mods, [className])} {...other}>
            {title !== undefined && (
                <div className={cls.title}>
                    <CustomTitle
                        level={TitleLevel.THREE}
                        ariaLevel={TitleLevel.THREE}
                    >
                        {title}
                    </CustomTitle>
                </div>
            )}
            {description !== undefined && (
                <p className={cls.description}>{description}</p>
            )}
        </div>
    );
};
