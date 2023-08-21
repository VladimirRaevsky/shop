import { type ReactNode, type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { type AppRoutes } from 'shared/config/routeConfig/RouteConfig';
import { ClassNames } from 'shared/lib';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    UNALTERED = 'unaltered',
}

interface AppLinkProps extends Omit<LinkProps, 'to'> {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
    to: AppRoutes;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className = '',
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={ClassNames(cls.appLink, {}, [cls[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
