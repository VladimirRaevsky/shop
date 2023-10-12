import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Close } from '../Close/Close';
import { Open } from '../Open/Open';

import { ClassNames } from 'shared/lib';

import { NavBar } from 'widgets/ui/Header/ui/NavBar';

import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

/**
 * @param className - Class for controlling a component from outside.
 */

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
            <div className={cls.button} onClick={onToggle}>
                {collapsed ? <Close /> : <Open />}
            </div>

            <div className={cls.wrapper}>
                <NavBar
                    className={cls.direction}
                    style={{
                        marginTop: '0',
                        marginRight: '0',
                        marginBottom: '15px',
                        marginLeft: '0',
                    }}
                />
            </div>
        </div>
    );
};
