import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';
import { type ListType, LIST_ITEMS } from '../const';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
    const { className = '' } = props;

    const { t } = useTranslation();

    const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

    const [navList, setNavList] = useState<ListType[]>(LIST_ITEMS);

    const toggleClassHandler = (index: number): void => {
        const newList = navList.map((el, i) => {
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

        setNavList(newList);
    };

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
