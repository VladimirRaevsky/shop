import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { type AppLinkProps, AppLinkTheme } from '../types';

import { ClassNames } from 'shared/lib';

import cls from './AppLink.module.scss';

/**
 * @param className - Class for controlling a component from outside
 * @param theme - Links theme.
 * @param to - Path.
 * @param children - React node.
 */

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
