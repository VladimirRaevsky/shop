import { type FC, useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { Close } from '../Close/Close';
import { Open } from '../Open/Open';

import { type SideBarProps } from '../types';

import { ClassNames } from 'shared/lib';

import { CustomButton } from 'shared/ui/CustomButton';
import { ButtonTheme, ButtonType } from 'shared/ui/CustomButton/types';
import { NavBar } from 'widgets/ui/Header/ui/NavBar';

import cls from './SideBar.module.scss';

/**
 * @param className - Class for controlling a component from outside.
 */

export const SideBar: FC<SideBarProps> = (props) => {
    const { className = '' } = props;

    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const sidePanelRef = useRef<HTMLDivElement>(null);

    const buttonRef = useRef<HTMLButtonElement>(null);

    const handlerOnToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    const handlerOnKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            setCollapsed(false);
        }
    };

    const handlerClickOutside = (event: Event): void => {
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
        window.addEventListener('click', handlerClickOutside);

        return () => {
            window.removeEventListener('click', handlerClickOutside);
        };
    }, []);

    useEffect(() => {
        if (collapsed) {
            window.addEventListener('keydown', handlerOnKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handlerOnKeyDown);
        };
    }, [collapsed, handlerOnKeyDown]);

    return (
        <div
            data-testid='sidebar'
            ref={sidePanelRef}
            className={ClassNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            onClick={(e: any) => {
                handlerClickOutside(e);
            }}
        >
            <CustomButton
                data-testid='button'
                className={cls.button}
                onClick={handlerOnToggle}
                type={ButtonType.BUTTON}
                theme={ButtonTheme.CLEAR}
                buttonRef={buttonRef}
            >
                {collapsed ? <Close /> : <Open />}
            </CustomButton>

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
