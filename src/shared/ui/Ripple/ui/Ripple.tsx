import { useEffect, useState, type FC, type MouseEvent } from 'react';

import cls from './Ripple.module.scss';

type RippleItem = {
    x: number;
    y: number;
    size: number;
};

interface RippleProps {
    duration?: number;
    color?: string;
}

/**
 * @param duration - Duration of a ripple effect.
 * @param color - Background color of a ripple.
 */

export const Ripple: FC<RippleProps> = (props) => {
    const { duration, color } = props;

    const [rippleArray, setRippleArray] = useState<RippleItem[]>([]);

    const [primaryColor, setPrimaryColor] = useState<string | undefined>();

    const addRipple = (event: MouseEvent): void => {
        const rippleContainer = event.currentTarget.getBoundingClientRect();

        const size =
            rippleContainer.width > rippleContainer.height
                ? rippleContainer.width
                : rippleContainer.height;

        const x = event.pageX - rippleContainer.left - size / 2;
        const y = event.pageY - rippleContainer.top - size / 2;

        const newRipple = {
            x,
            y,
            size,
        };

        setRippleArray([...rippleArray, newRipple]);
    };

    useEffect(() => {
        const body = document.documentElement;

        const computedColor =
            getComputedStyle(body).getPropertyValue('--primary-color');

        if (computedColor !== undefined) setPrimaryColor(computedColor);

        let bounce: number | undefined;

        if (rippleArray.length > 0) {
            window.clearTimeout(bounce);

            bounce = window.setTimeout(
                () => {
                    setRippleArray([]);
                    window.clearTimeout(bounce);
                },
                (duration as number) * 4,
            );
        }

        return () => {
            window.clearTimeout(bounce);
        };
    }, [rippleArray.length, duration]);

    return (
        <div className={cls.rippleContainer} onMouseDown={addRipple}>
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => {
                    return (
                        <span
                            className={cls.ripple}
                            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                            key={'span' + index}
                            style={{
                                top: ripple.y,
                                left: ripple.x,
                                width: ripple.size,
                                height: ripple.size,
                                backgroundColor:
                                    color !== undefined ? color : primaryColor,
                                animationDuration: duration?.toString(),
                            }}
                        />
                    );
                })}
        </div>
    );
};
