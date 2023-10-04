import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassNames } from 'shared/lib';

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
            <div className={cls.items}></div>
            {/* <div className={cls.collapsedBtn}></div>

            <div className={cls.switchers}></div> */}
        </div>
    );
};
