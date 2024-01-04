import { type ReactNode } from 'react';
import { type LinkProps } from 'react-router-dom';

import { type AppRoutes } from 'shared/config/routeConfig/RouteConfig';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    UNALTERED = 'unaltered',
}

export interface AppLinkProps extends Omit<LinkProps, 'to'> {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
    to: AppRoutes;
}
