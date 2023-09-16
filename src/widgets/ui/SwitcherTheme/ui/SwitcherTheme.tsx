import { Icon } from '@iconify/react';
import { type FC } from 'react';

import { ClassNames, useTheme } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';

import { ButtonTheme } from 'shared/ui/CustomButton/ui/CustomButton';

import cls from './SwitcherTheme.module.scss';

interface SwitcherThemeProps {
    className?: string;
}

export const SwitcherTheme: FC<SwitcherThemeProps> = (props) => {
    const { className = '' } = props;

    const { theme, themeToggleHandler } = useTheme();

    return (
        <CustomButton
            theme={ButtonTheme.DEFAULT}
            className={ClassNames(cls.switcherTheme, {}, [className])}
            onClick={themeToggleHandler}
        >
            <Icon
                className={ClassNames(cls.svg, {}, [])}
                icon={`line-md:${
                    theme === 'light'
                        ? 'moon-alt-to-sunny-outline-'
                        : 'sunny-outline-to-moon-alt-'
                }loop-transition`}
                width='30'
            />
        </CustomButton>
    );
};
