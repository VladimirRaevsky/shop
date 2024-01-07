/* eslint-disable no-irregular-whitespace */
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'antd';
import { type ChangeEvent, memo } from 'react';

import { type InputFormProps } from '../types';

import { ClassNames } from 'shared/lib';

import cls from './InputForm.module.scss';

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

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
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
                    onChange={onChangeHandler}
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
                    onChange={onChangeHandler}
                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    {...other}
                />
            )}
        </span>
    );
});
