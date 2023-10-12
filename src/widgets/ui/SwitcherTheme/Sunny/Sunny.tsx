import MoonFilledAltToSunnyFilledLoopTransition from '@iconify/icons-line-md/moon-filled-alt-to-sunny-filled-loop-transition';
import { Icon } from '@iconify/react';
import { type FC } from 'react';

export const Sunny: FC = () => {
    return (
        <Icon
            data-testid='sunny'
            icon={MoonFilledAltToSunnyFilledLoopTransition}
            width='30'
        />
    );
};
