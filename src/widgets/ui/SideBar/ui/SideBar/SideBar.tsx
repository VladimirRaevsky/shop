import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RoutePaths } from 'shared/config/routeConfig/RouteConfig';
import { ClassNames } from 'shared/lib';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import AboutSvg from 'shared/assets/icons/clarity_list.svg';
import HomeSvg from 'shared/assets/icons/home.svg';

import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = (props) => {
    const { className = '' } = props;

    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid='sidebar'
            className={ClassNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.items}>
                <AppLink
                    to={RoutePaths.main}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.link}
                >
                    <HomeSvg className={cls.icon} />
                    <span className={cls.item}>{t('Главная')}</span>
                </AppLink>

                <AppLink
                    to={RoutePaths.about}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.link}
                >
                    <AboutSvg className={cls.icon} />
                    <span className={cls.item}>{t('О нас')}</span>
                </AppLink>
            </div>
            <div className={cls.collapsedBtn}></div>

            <div className={cls.switchers}></div>
        </div>
    );
};
