import { useCallback, useState, type FC } from 'react';
import { ClassNames, useTheme } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { NavBar } from './NavBar';
import { MyContainer } from 'shared/ui/MyContainer';
import { Button } from 'antd';
import AvatarIcon from 'shared/assets/icons/header/avatar.svg';
import SearchIcon from 'shared/assets/icons/header/ion_search.svg';
import { Icon } from '@iconify/react';

import cls from './Header.module.scss';
import { SwitcherLang } from 'shared/ui/SwitcherLang';
import { AppLink } from 'shared/ui/AppLink';
import { AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { type ListType, LIST_ITEMS } from './NavBar/const';
import { SwitcherButton } from 'widgets/ui/SwitcherButton';
import { MyButton } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import { LoginModal } from 'features/AuthByUserName';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = () => {
    const [openModal, setOpenModal] = useState(false);

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

    const onOpenModalHandler = useCallback((): void => {
        setOpenModal(true);
    }, []);

    const onCloseModalHandler = useCallback((): void => {
        setOpenModal(false);
    }, []);

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

                    <div className={cls.right}>
                        <Button
                            className={cls.circle}
                            type='default'
                            shape='circle'
                            icon={<SearchIcon />}
                        />

                        <SwitcherLang />

                        <SwitcherButton />

                        <MyButton>
                            <AvatarIcon
                                className={cls.avatar}
                                onClick={onOpenModalHandler}
                            />
                        </MyButton>

                        <MyButton>
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
                        </MyButton>

                        <LoginModal
                            isOpen={openModal}
                            onClose={onCloseModalHandler}
                        />
                    </div>
                </div>
            </MyContainer>
        </header>
    );
};
