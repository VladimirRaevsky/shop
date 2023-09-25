import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { type ReactNode, type FC } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './InputForm.module.scss';

export enum InputFormTheme {
    SMALL = 'size_m',
    BIG = 'size_l',
}

export enum InputPlaceholder {
    EMAIL = 'Your email address here',
    SEARCH = 'Search',
    NAME = 'Name',
    PASSWORD = 'Password',
}

export enum InputType {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
}

interface InputFormProps {
    className?: string;
    placeholder?: string;
    description?: string;
    type: InputType;
    status?: 'warning' | 'error';
    prefix?: ReactNode;
    theme: InputFormTheme;
}

export const InputForm: FC<InputFormProps> = (props) => {
    const {
        className = '',
        placeholder,
        description,
        type,
        theme,
        status,
        prefix,
        ...other
    } = props;

    console.log(type);
    const onInputHandler = (vl: any): any => {
        console.log(vl.target.value);
    };

    return (
        <span className={ClassNames(cls.wrapper, {}, [className, cls[theme]])}>
            {description != null && (
                <label className={cls.label} htmlFor='inputField'>
                    {description}
                </label>
            )}
            {type !== 'password' ? (
                <Input
                    className={ClassNames(cls.inputForm, {}, [])}
                    placeholder={placeholder}
                    status={status}
                    id='inputField'
                    type={type}
                    maxLength={50}
                    showCount
                    allowClear
                    onInput={(e) => onInputHandler(e)}
                    prefix={prefix}
                    {...other}
                />
            ) : (
                <Input.Password
                    className={ClassNames(cls.inputForm, {}, [])}
                    placeholder={placeholder}
                    status={status}
                    id='inputField'
                    type={type}
                    maxLength={50}
                    showCount
                    allowClear
                    onInput={(e) => onInputHandler(e)}
                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    {...other}
                />
            )}
        </span>
    );
};
