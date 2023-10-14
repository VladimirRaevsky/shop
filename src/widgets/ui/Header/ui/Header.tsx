import { Icon } from '@iconify/react';
import { Col, Row, Typography } from 'antd';
import { useCallback, useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LoginModal } from 'features/AuthByUserName';

import AvatarIcon from 'shared/assets/icons/header/avatar.svg';
import SearchIcon from 'shared/assets/icons/header/ion_search.svg';
import { AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { ClassNames, useToggleClass } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';
import { Container } from 'shared/ui/Container';
import { CustomButton } from 'shared/ui/CustomButton';
import {
    ButtonTheme,
    ButtonType,
} from 'shared/ui/CustomButton/ui/CustomButton';
import { CustomTitle } from 'shared/ui/CustomTitle';

import { SwitcherLang } from 'widgets/ui/SwitcherLang';
import { SwitcherTheme } from 'widgets/ui/SwitcherTheme';

import cls from './Header.module.scss';
import { NavBar } from './NavBar';

interface HeaderProps {
    className?: string;
}

/**
 * @param className - Class for controlling a component from outside.
 */

export const Header: FC<HeaderProps> = () => {
    const { handlerToggleClass } = useToggleClass();

    const [openModal, setOpenModal] = useState(false);

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
                    <Col lg={15}>
                        <div className={cls.center}>
                            <NavBar />
                        </div>
                    </Col>
                    <Col xxl={4}>
                        <div className={cls.right}>
                            <CustomButton
                                type={ButtonType.BUTTON}
                                className={cls.indentation}
                                theme={ButtonTheme.CIRCLE}
                            >
                                <SearchIcon />
                            </CustomButton>

                            <SwitcherLang className={cls.indentation} />

                            <SwitcherTheme className={cls.indentation} />

                            <CustomButton
                                type={ButtonType.BUTTON}
                                className={cls.indentation}
                                theme={ButtonTheme.CLEAR}
                            >
                                <AvatarIcon
                                    className={cls.avatar}
                                    onClick={handlerOpenModal}
                                />
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
