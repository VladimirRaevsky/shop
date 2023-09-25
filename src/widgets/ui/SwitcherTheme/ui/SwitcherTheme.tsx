import { type FC } from 'react';

import { ClassNames, useTheme } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';

import { ButtonTheme } from 'shared/ui/CustomButton/ui/CustomButton';

import { Moony } from './Moony/Moony';
import { Sunny } from './Sunny/Sunny';

import cls from './SwitcherTheme.module.scss';

interface SwitcherThemeProps {
    className?: string;
}

export const SwitcherTheme: FC<SwitcherThemeProps> = (props) => {
    const { className = '' } = props;

    const { theme, themeToggleHandler } = useTheme();

    return (
        <CustomButton
            data-testid='switcherThemeButton'
            theme={ButtonTheme.DEFAULT}
            className={ClassNames(cls.switcherTheme, {}, [className])}
            onClick={themeToggleHandler}
        >
            {theme === 'light' ? <Sunny /> : <Moony />}
        </CustomButton>
    );
};
