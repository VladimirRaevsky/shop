import { useEffect, useState } from 'react';

import cls from './ButtonSideBar.module.scss';

import type React from 'react';

interface ButtonSideBarProps {
    className?: string;
}

export const ButtonSideBar: React.FC<ButtonSideBarProps> = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const [locked, setLocked] = useState(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | undefined>(
        undefined,
    );

    const { className = '' } = props;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const toggleButton = () => {
        if (!locked) {
            setLocked(true);
            const button = document.getElementById(
                'button',
            ) as HTMLButtonElement;
            button.classList.toggle('active');

            const openCubes: HTMLElement[] = Array.from(
                document.querySelectorAll('#open-cubes rect'),
            );

            const closeCubes: HTMLElement[] = Array.from(
                document.querySelectorAll('#close-cubes rect'),
            );

            const cubes = button.classList.contains('active')
                ? openCubes
                : closeCubes;
            const length = cubes.length;

            cubes.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.toggle(cls.spinIn);
                    element.classList.toggle(cls.spinOut);
                }, index * 10);
            });

            setTimeout(
                () => {
                    setLocked(false);
                },
                1300 + length * 10,
            );
        }

        const newTimerId = setTimeout(() => {
            setIsOpen((prev) => !prev);
        }, 3000);

        if (timerId != null) {
            clearTimeout(timerId);
        }
        setTimerId(newTimerId);
    };

    useEffect(() => {
        const button = document.getElementById('button') as HTMLButtonElement;
        button.addEventListener('click', toggleButton);

        return () => {
            button.removeEventListener('click', toggleButton);
            if (timerId != null) {
                clearTimeout(timerId);
            }
        };
    }, [timerId]);

    return (
        <button id='button' className={cls.menuToggle}>
            <svg viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'>
                {isOpen ? (
                    <g id='open-cubes' className={cls.openCubes}>
                        <g id='top-cubes'>
                            <rect x='12' y='19' width='2' height='2' />
                            <rect x='12' y='21' width='2' height='2' />

                            <rect x='14' y='19' width='2' height='2' />
                            <rect x='14' y='21' width='2' height='2' />

                            <rect x='16' y='19' width='2' height='2' />
                            <rect x='16' y='21' width='2' height='2' />

                            <rect x='18' y='19' width='2' height='2' />
                            <rect x='18' y='21' width='2' height='2' />

                            <rect x='20' y='19' width='2' height='2' />
                            <rect x='20' y='21' width='2' height='2' />

                            <rect x='22' y='19' width='2' height='2' />
                            <rect x='22' y='21' width='2' height='2' />

                            <rect x='24' y='19' width='2' height='2' />
                            <rect x='24' y='21' width='2' height='2' />

                            <rect x='26' y='19' width='2' height='2' />
                            <rect x='26' y='21' width='2' height='2' />

                            <rect x='28' y='19' width='2' height='2' />
                            <rect x='28' y='21' width='2' height='2' />

                            <rect x='30' y='19' width='2' height='2' />
                            <rect x='30' y='21' width='2' height='2' />

                            <rect x='32' y='19' width='2' height='2' />
                            <rect x='32' y='21' width='2' height='2' />

                            <rect x='34' y='19' width='2' height='2' />
                            <rect x='34' y='21' width='2' height='2' />

                            <rect x='36' y='19' width='2' height='2' />
                            <rect x='36' y='21' width='2' height='2' />
                        </g>

                        <g id='bottom-cubes'>
                            <rect x='12' y='27' width='2' height='2' />
                            <rect x='12' y='29' width='2' height='2' />

                            <rect x='14' y='27' width='2' height='2' />
                            <rect x='14' y='29' width='2' height='2' />

                            <rect x='16' y='27' width='2' height='2' />
                            <rect x='16' y='29' width='2' height='2' />

                            <rect x='18' y='27' width='2' height='2' />
                            <rect x='18' y='29' width='2' height='2' />

                            <rect x='20' y='27' width='2' height='2' />
                            <rect x='20' y='29' width='2' height='2' />

                            <rect x='22' y='27' width='2' height='2' />
                            <rect x='22' y='29' width='2' height='2' />

                            <rect x='24' y='27' width='2' height='2' />
                            <rect x='24' y='29' width='2' height='2' />

                            <rect x='26' y='27' width='2' height='2' />
                            <rect x='26' y='29' width='2' height='2' />

                            <rect x='28' y='27' width='2' height='2' />
                            <rect x='28' y='29' width='2' height='2' />

                            <rect x='30' y='27' width='2' height='2' />
                            <rect x='30' y='29' width='2' height='2' />

                            <rect x='32' y='27' width='2' height='2' />
                            <rect x='32' y='29' width='2' height='2' />

                            <rect x='34' y='27' width='2' height='2' />
                            <rect x='34' y='29' width='2' height='2' />

                            <rect x='36' y='27' width='2' height='2' />
                            <rect x='36' y='29' width='2' height='2' />
                        </g>
                    </g>
                ) : (
                    <g
                        id='close-cubes'
                        className={cls.closeCubes}
                        transform='rotate(45, 25, 25)'
                    >
                        <g id='vertical-cubes'>
                            <rect x='25' y='13' width='2' height='2' />
                            <rect x='23' y='13' width='2' height='2' />

                            <rect x='25' y='15' width='2' height='2' />
                            <rect x='23' y='15' width='2' height='2' />

                            <rect x='25' y='17' width='2' height='2' />
                            <rect x='23' y='17' width='2' height='2' />

                            <rect x='25' y='19' width='2' height='2' />
                            <rect x='23' y='19' width='2' height='2' />

                            <rect x='25' y='21' width='2' height='2' />
                            <rect x='23' y='21' width='2' height='2' />

                            <rect x='25' y='23' width='2' height='2' />
                            <rect x='23' y='23' width='2' height='2' />

                            <rect x='25' y='25' width='2' height='2' />
                            <rect x='23' y='25' width='2' height='2' />

                            <rect x='25' y='27' width='2' height='2' />
                            <rect x='23' y='27' width='2' height='2' />

                            <rect x='25' y='29' width='2' height='2' />
                            <rect x='23' y='29' width='2' height='2' />

                            <rect x='25' y='31' width='2' height='2' />
                            <rect x='23' y='31' width='2' height='2' />

                            <rect x='25' y='33' width='2' height='2' />
                            <rect x='23' y='33' width='2' height='2' />

                            <rect x='25' y='35' width='2' height='2' />
                            <rect x='23' y='35' width='2' height='2' />
                        </g>

                        <g id='horizontal-cubes'>
                            <rect x='13' y='23' width='2' height='2' />
                            <rect x='13' y='25' width='2' height='2' />

                            <rect x='15' y='23' width='2' height='2' />
                            <rect x='15' y='25' width='2' height='2' />

                            <rect x='17' y='23' width='2' height='2' />
                            <rect x='17' y='25' width='2' height='2' />

                            <rect x='19' y='23' width='2' height='2' />
                            <rect x='19' y='25' width='2' height='2' />

                            <rect x='21' y='23' width='2' height='2' />
                            <rect x='21' y='25' width='2' height='2' />

                            <rect x='27' y='23' width='2' height='2' />
                            <rect x='27' y='25' width='2' height='2' />

                            <rect x='29' y='23' width='2' height='2' />
                            <rect x='29' y='25' width='2' height='2' />

                            <rect x='31' y='23' width='2' height='2' />
                            <rect x='31' y='25' width='2' height='2' />

                            <rect x='33' y='23' width='2' height='2' />
                            <rect x='33' y='25' width='2' height='2' />

                            <rect x='35' y='23' width='2' height='2' />
                            <rect x='35' y='25' width='2' height='2' />
                        </g>
                    </g>
                )}
            </svg>
        </button>
    );
};
