import { Input, Space } from 'antd';
import { type InputHTMLAttributes, type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassNames } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';
import {
    ButtonTheme,
    ButtonType,
} from 'shared/ui/CustomButton/ui/CustomButton';
import {
    type InputPlaceholder,
    type InputType,
} from 'shared/ui/InputForm/ui/InputForm';

import cls from './CustomInput.module.scss';

const { Search } = Input;

export enum InputTheme {
    SUBSCRIBE = 'subscribe',
    SEARCH = 'search',
}

export enum InputText {
    SUBSCRIBE = 'subscribe',
}

export interface IInputProps {
    theme: InputTheme;
    type: InputType;
    placeholder: InputPlaceholder;
    className?: string;
}

/**
 * @param className - Duration of a ripple effect.
 * @param theme - Input theme.
 * @param children - React node.
 * @param type - Input type.
 * @param placeholder - Input placeholder.
 */

let isSearch: boolean = false;

export const CustomInput: FC<IInputProps> = (props) => {
    const { type, placeholder, className = '', theme, ...other } = props;

    isSearch = theme === 'search';

    const { t } = useTranslation();

    const handlerOnAnimation = (): void => {};

    const onSearchHandler = (e: any): void => {
        console.log(e.target?.value);
    };

    return isSearch ? (
        <span className={ClassNames(cls.search, {}, [className])}>
            <Search
                rootClassName={ClassNames(cls.input, {}, [])}
                type={type}
                maxLength={30}
                showCount
                placeholder={placeholder}
                allowClear
                onInput={(e: any) => {
                    onSearchHandler(e);
                }}
                onClick={handlerOnAnimation}
                spellCheck
                {...other}
            />
        </span>
    ) : (
        <span className={ClassNames(cls.subscribe, {}, [className])}>
            <Space.Compact>
                <Input
                    rootClassName={ClassNames(cls.input, {}, [])}
                    type={type}
                    maxLength={30}
                    showCount
                    placeholder={placeholder}
                    allowClear
                    onInput={(e: any) => {
                        onSearchHandler(e);
                    }}
                    onClick={handlerOnAnimation}
                    spellCheck
                    {...other}
                />
                <CustomButton
                    theme={ButtonTheme.CLEAR}
                    type={ButtonType.SUBMIT}
                >
                    {t('подписаться')}
                </CustomButton>
            </Space.Compact>
        </span>
    );
};
