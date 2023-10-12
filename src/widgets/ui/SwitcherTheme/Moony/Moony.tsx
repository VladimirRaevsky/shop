import SunnyFilledLoopToMoonFilledLoopTransition from '@iconify/icons-line-md/sunny-filled-loop-to-moon-filled-loop-transition';
import { Icon } from '@iconify/react';
import { type FC } from 'react';

export const Moony: FC = () => {
    return (
        <Icon
            data-testid='moony'
            icon={SunnyFilledLoopToMoonFilledLoopTransition}
            style={{ color: '#ffff' }}
            width='30'
        />
    );
};
