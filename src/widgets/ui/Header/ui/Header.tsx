import { useCallback, useState, type FC } from 'react';
import { ClassNames, useTheme } from 'shared/lib';
import { MyButton, MyButtonTheme } from 'shared/ui/Button/ui/MyButton';
import { useTranslation } from 'react-i18next';
import { NavBar } from './NavBar';
import { MyContainer } from 'shared/ui/MyContainer';
import { Switch, Button } from 'antd';
import AvatarIcon from 'shared/assets/icons/header/avatar.svg';
import SearchIcon from 'shared/assets/icons/header/ion_search.svg';
import { Icon } from '@iconify/react';

import cls from './Header.module.scss';
import { SwitcherLang } from 'shared/ui/SwitcherLang';
import { AppLink } from 'shared/ui/AppLink';
import { AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { type ListType, LIST_ITEMS } from './NavBar/const';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = () => {
    const [isAuth, setIsAuth] = useState(true);

    const { theme, themeToggleHandler } = useTheme();

    const { t } = useTranslation();

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
        console.log('list render');
        setNavList(newList);
    };

    const isAuthHandler = useCallback((): void => {
        setIsAuth((prev) => !prev);
    }, []);

    console.log(navList);
    return (
        <header className={ClassNames(cls.Header, {}, [])}>
            <MyContainer>
                <div className={cls.wrapper}>
                    <div className={cls.logo}>MiniStore</div>
                    <div className='center'>
                        <NavBar
                            navList={navList}
                            toggleClassHandler={toggleClassHandler}
                            setNavList={setNavList}
                        />
                    </div>
                    <div className='right'>
                        <Button
                            className={cls.circle}
                            type='default'
                            shape='circle'
                            icon={<SearchIcon />}
                        ></Button>
                        <SwitcherLang />
                        <Switch
                            checked={theme === 'light'}
                            onChange={themeToggleHandler}
                            checkedChildren={t('светлая')}
                            unCheckedChildren={t('темная')}
                        />
                        {/* {isAuth ? (
                            <MyButton
                                theme={MyButtonTheme.BACKGROUND}
                                className={cls.right}
                                onClick={isAuthHandler}
                            >
                                {t('войти')}
                            </MyButton>
                        ) : (
                            
                        )} */}
                        <AvatarIcon
                            className={cls.avatar}
                            onClick={isAuthHandler}
                        />
                        <AppLink to={AppRoutes.CART}>
                            <Icon
                                className={cls.cart}
                                icon='fluent:cart-20-filled'
                                width='25'
                                onClick={() => {
                                    toggleClassHandler(4);
                                }}
                            />
                        </AppLink>
                    </div>
                </div>
            </MyContainer>
        </header>
    );
};
