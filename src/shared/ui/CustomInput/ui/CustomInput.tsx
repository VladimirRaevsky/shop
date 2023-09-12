import { Input } from 'antd';
import { type InputHTMLAttributes, type FC, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassNames } from 'shared/lib';

import cls from './CustomInput.module.scss';

const { Search } = Input;

export enum InputSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum InputTheme {
    SUBSCRIBE = 'subscribe',
    SEARCH = 'search',
    AUTH_NAME = 'name',
    AUTH_PASSWORD = 'password',
}

export enum InputText {
    SUBSCRIBE = 'subscribe',
}

export enum InputPlaceholder {
    EMAIL = 'Your email address here',
    SEARCH = 'Search',
    NAME = 'name',
    PASSWORD = 'password',
}

export enum InputType {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
}

export interface IInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    theme: InputTheme;
    type: InputType;
    placeholder: InputPlaceholder;
    size: InputSize;
    className?: string;
    desc?: InputText;
    status?: 'warning' | 'error';
}

export const CustomInput: FC<IInputProps> = (props) => {
    const {
        type,
        placeholder,
        size,
        desc,
        className = '',
        theme,
        status,
        ...other
    } = props;

    const { t } = useTranslation();

    const handlerOnAnimation = (): void => {};

    const onSearchHandler = (e: any): void => {
        console.log(e.target?.value);
    };

    return (
        <Search
            rootClassName={ClassNames(cls.input, {}, [
                className,
                cls[size],
                cls[theme],
            ])}
            status={status}
            type={type}
            maxLength={30}
            showCount
            placeholder={t(placeholder.length > 6 ? 'имэйл' : 'поиск')}
            allowClear
            enterButton={desc && t('подписаться')}
            onInput={(e: any) => {
                onSearchHandler(e);
            }}
            onClick={handlerOnAnimation}
            spellCheck
            {...other}
        />
    );
};
