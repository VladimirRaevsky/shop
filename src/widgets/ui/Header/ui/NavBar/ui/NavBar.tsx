import { type CSSProperties, useEffect, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { __LIST_ITEMS__, type ListType } from '../const';

import { ClassNames } from 'shared/lib';
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

    const location = useLocation();

    const { t } = useTranslation();

    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

    const [listElements, setListElements] =
        useState<ListType[]>(__LIST_ITEMS__);

    const handlerToggleClass = (index: number): void => {
        const newList = listElements.map((el, i) => {
            if (i !== index) {
                return {
                    ...el,
                    hover: false,
                };
            } else {
                return {
                    ...el,
                    hover: true,
                };
            }
        });

        setListElements(newList);
    };

    useEffect(() => {
        const path =
            location.pathname.length > 1
                ? location.pathname.slice(1)
                : location.pathname;

        const newList = listElements.map((el) => {
            if (el.to !== path) {
                return {
                    ...el,
                    hover: false,
                };
            } else {
                return {
                    ...el,
                    hover: true,
                };
            }
        });
        setListElements(newList);
    }, []);

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
