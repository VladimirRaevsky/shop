import { Icon } from '@iconify/react';
import { Typography } from 'antd';
import { useCallback, useState, type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUserName';
import AvatarIcon from 'shared/assets/icons/header/avatar.svg';

import SearchIcon from 'shared/assets/icons/header/ion_search.svg';

import { AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { ClassNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';
import { Container } from 'shared/ui/Container';

import { CustomButton } from 'shared/ui/CustomButton';
import { ButtonTheme } from 'shared/ui/CustomButton/ui/CustomButton';
import { SwitcherLang } from 'widgets/ui/SwitcherLang';
import { SwitcherTheme } from 'widgets/ui/SwitcherTheme';

import cls from './Header.module.scss';
import { NavBar } from './NavBar';
import { type ListType, LIST_ITEMS } from './NavBar/const';

const { Title, Paragraph } = Typography;

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = () => {
    const [openModal, setOpenModal] = useState(false);

    const [listElements, setListElements] = useState<ListType[]>(LIST_ITEMS);

    const handlerToggleClass = useCallback((index: number): void => {
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
    }, []);

    const handlerOpenModal = useCallback((): void => {
        setOpenModal(true);
    }, []);

    const handlerCloseModal = useCallback((): void => {
        setOpenModal(false);
    }, []);

    return (
        <header className={ClassNames(cls.header, {}, [])}>
            <Container>
                <div className={cls.wrapper}>
                    <Title
                        className={cls.logo}
                        aria-level={5}
                        level={5}
                        underline
                        style={{ margin: 0 }}
                    >
                        <span className={cls.logo}>MiniStore</span>
                    </Title>

                    <div className='center'>
                        <NavBar
                            listElements={listElements}
                            handlerToggleClass={handlerToggleClass}
                            setListElements={setListElements}
                        />
                    </div>

                    <div className={cls.right}>
                        <CustomButton theme={ButtonTheme.DEFAULT} shape>
                            <SearchIcon />
                        </CustomButton>

                        <SwitcherLang />

                        <SwitcherTheme />

                        <CustomButton theme={ButtonTheme.DEFAULT}>
                            <AvatarIcon
                                className={cls.avatar}
                                onClick={handlerOpenModal}
                            />
                        </CustomButton>

                        <CustomButton
                            theme={ButtonTheme.DEFAULT}
                            className={cls.cart}
                        >
                            <AppLink to={AppRoutes.CART}>
                                <Icon
                                    className={cls.icon}
                                    icon='fluent:cart-20-filled'
                                    onClick={() => {
                                        handlerToggleClass(4);
                                    }}
                                />
                            </AppLink>
                        </CustomButton>

                        <LoginModal
                            isOpen={openModal}
                            onClose={handlerCloseModal}
                        />
                    </div>
                </div>
            </Container>
        </header>
    );
};
