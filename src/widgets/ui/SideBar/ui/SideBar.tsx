import { type FC, useState, useEffect, useRef } from 'react';
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

    const sidePanelRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    const onKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            setCollapsed(false);
        }
    };

    const handleClickOutside = (event: Event): void => {
        event.stopPropagation();

        if (
            sidePanelRef.current != null &&
            buttonRef.current !== null &&
            !sidePanelRef.current.contains(event.target as Node) &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setCollapsed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (collapsed) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [collapsed, onKeyDown]);

    return (
        <div
            data-testid='sidebar'
            ref={sidePanelRef}
            className={ClassNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            onClick={(e: any) => {
                handleClickOutside(e);
            }}
        >
            <div className={cls.button} onClick={onToggle} ref={buttonRef}>
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
