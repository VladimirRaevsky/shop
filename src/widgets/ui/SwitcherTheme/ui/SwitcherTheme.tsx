import { type FC } from 'react';

import { Moony } from '../Moony/Moony';

import { Sunny } from '../Sunny/Sunny';

import { ClassNames, useTheme } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';

import {
    ButtonTheme,
    ButtonType,
} from 'shared/ui/CustomButton/ui/CustomButton';

import cls from './SwitcherTheme.module.scss';

interface SwitcherThemeProps {
    className?: string;
}

/**
 * @param className - Class for controlling a component from outside.
 */

export const SwitcherTheme: FC<SwitcherThemeProps> = (props) => {
    const { className = '' } = props;

    const { theme, themeToggleHandler } = useTheme();

    return (
        <CustomButton
            type={ButtonType.BUTTON}
            data-testid='switcherThemeButton'
            theme={ButtonTheme.CLEAR}
            className={ClassNames(cls.switcherTheme, {}, [className])}
            onClick={themeToggleHandler}
        >
            {theme === 'light' ? <Sunny /> : <Moony />}
        </CustomButton>
    );
};
