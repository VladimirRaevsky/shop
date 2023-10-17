/* eslint-disable no-irregular-whitespace */
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { type ReactNode, type ChangeEvent, memo } from 'react';

import { ClassNames } from 'shared/lib';

import cls from './InputForm.module.scss';

export enum InputFormTheme {
    SMALL = 'size_m',
    BIG = 'size_l',
}

export enum InputPlaceholder {
    EMAIL = 'Your email address',
    SEARCH = 'Search',
    NAME = 'Name',
    PASSWORD = 'Password',
}

export enum InputType {
    TEXT = 'text',
    NUMBER = 'number',
    PASSWORD = 'password',
}

export type DescriptionInput =
    | 'First name *'
    | 'Last name *'
    | 'Company name (optional)'
    | 'Country / Region *'
    | 'Street address *'
    | 'Town / City *'
    | 'State *'
    | 'ZIP Code *'
    | 'Phone *'
    | 'Email address *'
    | 'Order notes (optional)';

export type StatusType = 'warning' | 'error';

interface InputFormProps {
    className?: string;
    placeholder: string;
    description?: DescriptionInput;
    type: InputType;
    status?: StatusType;
    prefix?: ReactNode;
    theme: InputFormTheme;
    value?: string | number;
    onChange?: (value: string) => void;
}

/**
 * @param className - Class for controlling a component from outside.
 * @param theme - Input theme.
 * @param children - React node.
 * @param type - Input type.
 * @param placeholder - Input placeholder.
 * @param status - Input work status.
 * @param description - Field name to describe the contents of the input.
 * @param onChange - Function for reading fields from inputs.
 * @param value - Read values ​​from inputs.
 */

export const InputForm = memo(function InputForm(props: InputFormProps) {
    const {
        className = '',
        placeholder,
        description,
        type,
        theme,
        status,
        prefix,
        onChange,
        value,
        ...other
    } = props;

    const uniqueId = `inputField_${Math.random().toString(36).slice(2, 9)}`;

    const handlerOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
        onChange?.(event.target.value);
    };

    return (
        <span className={ClassNames(cls.wrapper, {}, [className, cls[theme]])}>
            {description != null && (
                <label className={cls.label} htmlFor={uniqueId}>
                    <p>{description}</p>
                </label>
            )}
            {type !== 'password' ? (
                <Input
                    className={ClassNames(cls.inputForm, {}, [])}
                    placeholder={placeholder}
                    status={status}
                    id={uniqueId}
                    type={type}
                    maxLength={50}
                    showCount
                    allowClear
                    onChange={handlerOnChange}
                    value={value}
                    prefix={prefix}
                    {...other}
                />
            ) : (
                <Input.Password
                    className={ClassNames(cls.inputForm, {}, [])}
                    placeholder={placeholder}
                    status={status}
                    id={uniqueId}
                    type={type}
                    maxLength={50}
                    showCount
                    allowClear
                    value={value}
                    onChange={handlerOnChange}
                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    {...other}
                />
            )}
        </span>
    );
});
