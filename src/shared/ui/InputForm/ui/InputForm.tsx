import { Input } from 'antd';
import { type FC } from 'react';

import { ClassNames } from 'shared/lib';
import { type InputType } from 'shared/ui/CustomInput/ui/CustomInput';

import cls from './InputForm.module.scss';

export enum InputFormSize {
    M = 'size_m',
    L = 'size_l',
}

interface InputFormProps {
    className?: string;
    placeholder?: string;
    desc?: string;
    type: InputType;
    size: InputFormSize;
}

export const InputForm: FC<InputFormProps> = (props) => {
    const { className = '', placeholder, desc, type, size, ...other } = props;

    const onInputHandler = (vl: any): any => {
        console.log(vl.target.value);
    };

    return (
        <div className={ClassNames(cls.wrapper, {}, [className, cls[size]])}>
            {desc != null && (
                <label className={cls.label} htmlFor='inputField'>
                    {desc}
                </label>
            )}
            <Input
                className={ClassNames(cls.inputForm, {}, [className])}
                placeholder={placeholder}
                id='inputField'
                type={type}
                maxLength={50}
                showCount
                allowClear
                onInput={(e) => onInputHandler(e)}
                {...other}
            />
        </div>
    );
};
