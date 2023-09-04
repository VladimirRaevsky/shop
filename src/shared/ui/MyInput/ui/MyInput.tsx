import { type InputHTMLAttributes, type FC } from 'react';
import { Input } from 'antd';
import { ClassNames } from 'shared/lib';
import cls from './MyInput.module.scss';
import { useTranslation } from 'react-i18next';

const { Search } = Input;

export enum MyInputSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export enum MyInputTheme {
    SUBSCRIBE = 'subscribe',
    SEARCH = 'search',
    AUTH_NAME = 'name',
    AUTH_PASSWORD = 'password'
}

export enum MyInputText {
    SUBSCRIBE = 'subscribe',
}

export enum MyInputPlaceholder {
    EMAIL = 'Your email address here',
    SEARCH = 'Search',
    NAME = 'name',
    PASSWORD = 'password'
}

export enum MyInputType{
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password'
}

export interface IMyInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    theme: MyInputTheme;
    type: MyInputType;
    placeholder: MyInputPlaceholder;
    size: MyInputSize;
    className?: string;
    desc?: MyInputText;
}

export const MyInput: FC<IMyInputProps> = (props) => {
    const {
        type,
        placeholder,
        size,
        desc,
        className = '',
        theme,
        ...other
    } = props;

    const { t } = useTranslation();

    const onAnimationHandler = (): void => {};

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
            type={type}
            maxLength={30}
            showCount
            placeholder={t(placeholder && placeholder.length > 6 ? 'имэйл' : 'поиск')}
            allowClear
            enterButton={desc && t('подписаться')}
            onInput={(e) => {
                onSearchHandler(e);
            }}
            onClick={onAnimationHandler}
            spellCheck
            {...other}
        />
    );
};
