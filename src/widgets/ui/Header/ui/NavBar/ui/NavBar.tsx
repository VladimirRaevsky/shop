import { useCallback, useEffect, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { ClassNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';
import { type ListType } from '../const';

import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
    toggleClassHandler: (el: number) => void;
    setNavList: (el: ListType[]) => void;
    navList: ListType[];
}

export const NavBar: FC<NavBarProps> = (props) => {
    const { className = '', toggleClassHandler, setNavList, navList } = props;

    const location = useLocation();

    const { t } = useTranslation();

    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

    useEffect(() => {
        const path =
            location.pathname.length > 1
                ? location.pathname.slice(1)
                : location.pathname;

        const newList = navList.map((el) => {
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
        setNavList(newList);
    }, []);

    return (
        <nav className={ClassNames(cls.navBar, {}, [className])}>
            <ul className={cls.list}>
                {navList.map((el, index) => {
                    return (
                        <li
                            key={index}
                            className={ClassNames(
                                cls.item,
                                { [cls.hover]: el.hover },
                                [
                                    className,
                                    `${
                                        hoveredIndex === index && !el.hover
                                            ? cls.hesitate
                                            : ''
                                    }`,
                                ],
                            )}
                            onClick={() => {
                                toggleClassHandler(index);
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
