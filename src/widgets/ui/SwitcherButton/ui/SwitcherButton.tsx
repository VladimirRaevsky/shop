import { type FC } from 'react';
import { ClassNames, useTheme } from 'shared/lib';
import { MyButton } from 'shared/ui/Button';
import { Icon } from '@iconify/react';

import cls from './SwitcherButton.module.scss';

interface SwitcherButtonProps {
    className?: string;
}

export const SwitcherButton: FC<SwitcherButtonProps> = (props) => {
    const { className = '' } = props;

    const { theme, themeToggleHandler } = useTheme();

    return (
        <MyButton
            className={ClassNames(theme === 'light' ? cls.moon : '', {}, [
                className,
            ])}
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
        </MyButton>
    );
};
