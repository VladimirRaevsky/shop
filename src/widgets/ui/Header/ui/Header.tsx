import { Icon } from '@iconify/react';
import { Col, Row } from 'antd';
import { useCallback, useState, type FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { type HeaderProps } from '../types';

import { getUserAuthData, userActions } from 'entites/User';
import { LoginModal } from 'features/AuthByUserName';

import { AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { ClassNames, useToggleClass } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';
import { Container } from 'shared/ui/Container';
import { CustomButton } from 'shared/ui/CustomButton';
import { ButtonTheme, ButtonType } from 'shared/ui/CustomButton/types';
import { CustomTitle } from 'shared/ui/CustomTitle';

import { SwitcherLang } from 'widgets/ui/SwitcherLang';
import { SwitcherTheme } from 'widgets/ui/SwitcherTheme';

import cls from './Header.module.scss';
import { NavBar } from './NavBar';

/**
 * @param className - Class for controlling a component from outside.
 */

export const Header: FC<HeaderProps> = () => {
    const { toggleClassHandler } = useToggleClass();

    const [openModal, setOpenModal] = useState(false);

    const AuthData = useSelector(getUserAuthData);

    const dispatch = useDispatch();

    const openModalHandler = useCallback((): void => {
        setOpenModal(true);
    }, []);

    const closeModalHandler = useCallback((): void => {
        setOpenModal(false);
    }, []);

    const logOutHandler = useCallback((): void => {
        dispatch(userActions.logoutUser());
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
                    <Col lg={15}>
                        <div className={cls.center}>
                            <NavBar />
                        </div>
                    </Col>
                    <Col xxl={4}>
                        <div className={cls.right}>
                            <SwitcherLang className={cls.indentation} />

                            <SwitcherTheme className={cls.indentation} />

                            <CustomButton
                                type={ButtonType.BUTTON}
                                className={cls.indentation}
                                theme={ButtonTheme.CLEAR}
                            >
                                {AuthData !== undefined && AuthData !== null ? (
                                    <>
                                        <Icon
                                            icon='streamline:logout-1'
                                            width='25'
                                            className={cls.logOut}
                                            onClick={logOutHandler}
                                        />
                                        <span className={cls.user}>
                                            {AuthData.username}
                                        </span>
                                    </>
                                ) : (
                                    <Icon
                                        icon='streamline:login-1'
                                        width='25'
                                        className={cls.logIn}
                                        onClick={openModalHandler}
                                    />
                                )}
                            </CustomButton>

                            <CustomButton
                                type={ButtonType.BUTTON}
                                theme={ButtonTheme.CLEAR}
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
                                            toggleClassHandler(4);
                                        }}
                                    />
                                </AppLink>
                            </CustomButton>

                            <LoginModal
                                isOpen={openModal}
                                onClose={closeModalHandler}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};
