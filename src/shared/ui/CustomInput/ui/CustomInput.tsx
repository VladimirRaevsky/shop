import { Input } from 'antd';
import { type InputHTMLAttributes, type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ClassNames } from 'shared/lib';
import {
    type InputPlaceholder,
    type InputType,
} from 'shared/ui/InputForm/ui/InputForm';

import cls from './CustomInput.module.scss';

const { Search } = Input;

// export enum InputSize {
//     M = 'size_m',
//     L = 'size_l',
//     XL = 'size_xl',
// }

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
    subscribe?: InputText;
}

export const CustomInput: FC<IInputProps> = (props) => {
    const {
        type,
        placeholder,
        subscribe,
        className = '',
        theme,
        ...other
    } = props;

    const { t } = useTranslation();

    const handlerOnAnimation = (): void => {};

    const onSearchHandler = (e: any): void => {
        console.log(e.target?.value);
    };
    /* eslint-disable */
    //t(placeholder.length > 6 ? 'имэйл' : 'поиск')
    return (
        <span className={ClassNames('', {}, [className, cls[theme]])}>
            <Search
                rootClassName={ClassNames(cls.input, {}, [])}
                type={type}
                maxLength={30}
                showCount
                placeholder={placeholder}
                allowClear
                enterButton={subscribe && t('подписаться')}
                onInput={(e: any) => {
                    onSearchHandler(e);
                }}
                onClick={handlerOnAnimation}
                spellCheck
                {...other}
            />
        </span>
    );
};
