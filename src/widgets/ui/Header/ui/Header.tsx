import { Icon } from '@iconify/react';
import { Col, Row, Typography } from 'antd';
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

import { CustomTitle } from 'shared/ui/CustomTitle';
import { SwitcherLang } from 'widgets/ui/SwitcherLang';
import { SwitcherTheme } from 'widgets/ui/SwitcherTheme';

import cls from './Header.module.scss';
import { NavBar } from './NavBar';
import { type ListType, LIST_ITEMS } from './NavBar/const';

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
                <Row
                    gutter={{ md: 5, lg: 8, xl: 10, xxl: 12 }}
                    align='middle'
                    justify='space-between'
                >
                    <Col xxl={4}>
                        <CustomTitle level={1} ariaLevel={1}>
                            <span style={{ font: 'inherit' }}>MiniStore</span>
                        </CustomTitle>
                    </Col>
                    <Col lg={13}>
                        <div className={cls.center}>
                            <NavBar
                                listElements={listElements}
                                handlerToggleClass={handlerToggleClass}
                                setListElements={setListElements}
                            />
                        </div>
                    </Col>
                    <Col xxl={3}>
                        <div className={cls.right}>
                            <CustomButton
                                className={cls.indentation}
                                theme={ButtonTheme.DEFAULT}
                                shape
                            >
                                <SearchIcon />
                            </CustomButton>

                            <SwitcherLang className={cls.indentation} />

                            <SwitcherTheme className={cls.indentation} />

                            <CustomButton
                                className={cls.indentation}
                                theme={ButtonTheme.DEFAULT}
                            >
                                <AvatarIcon
                                    className={cls.avatar}
                                    onClick={handlerOpenModal}
                                />
                            </CustomButton>

                            <CustomButton
                                theme={ButtonTheme.DEFAULT}
                                className={cls.cart}
                            >
                                <AppLink
                                    to={AppRoutes.CART}
                                    className={cls.align}
                                >
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
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
