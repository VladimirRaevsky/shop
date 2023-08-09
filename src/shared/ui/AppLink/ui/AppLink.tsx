import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { ClassNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    UNALTERED = 'unaltered',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
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
