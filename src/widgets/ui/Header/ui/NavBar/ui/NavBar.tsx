import { useState, type CSSProperties, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassNames, useToggleClass } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';

import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
    style?: CSSProperties | undefined;
}

/**
 * @param className - Class for controlling a component from outside.
 * @param style - Inline styles
 */

export const NavBar: FC<NavBarProps> = (props) => {
    const { className = '', style } = props;

    const { listElements, handlerToggleClass } = useToggleClass();

    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

    const { t } = useTranslation();

    return (
        <nav className={ClassNames(cls.navBar, {}, [])}>
            <ul className={ClassNames(cls.list, {}, [className])}>
                {listElements.map((el, index) => {
                    return (
                        <li
                            key={index}
                            style={style}
                            className={ClassNames(
                                cls.item,

                                { [cls.hover]: el.hover },
                                [
                                    className,
                                    `${
                                        hoveredIndex === index && !el.hover
                                            ? cls.active
                                            : ''
                                    }`,
                                ],
                            )}
                            onClick={() => {
                                handlerToggleClass(index);
                            }}
                            onMouseEnter={() => {
                                setHoveredIndex(index);
                            }}
                            onMouseLeave={() => {
                                setHoveredIndex(null);
                            }}
                        >
                            <AppLink to={el.to}>{t(el.text)}</AppLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
