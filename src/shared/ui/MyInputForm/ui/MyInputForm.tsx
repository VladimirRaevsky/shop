import { type FC } from 'react';
import { ClassNames } from 'shared/lib';
import { Input } from 'antd';
import cls from './MyInputForm.module.scss';
import { MyInputType } from 'shared/ui/MyInput/ui/MyInput';

export enum MyInputFormSize {
    M = 'size_m',
    L = 'size_l',
}

interface MyInputFormProps {
    className?: string;
    placeholder?: string;
    desc?: string;
    type: MyInputType;
    size: MyInputFormSize;
}

export const MyInputForm: FC<MyInputFormProps> = (props) => {
    const { className = '', placeholder, desc, type, size, ...other } = props;

    const onInputHandler = (vl: any): any => {
        console.log(vl.target.value);
    };

    return (
        <>
            {desc != null && <label htmlFor='inputField'>{desc}</label>}
            <Input
                className={ClassNames(cls.myInputForm, {}, [
                    className,
                    cls[size],
                ])}
                placeholder={placeholder}
                id='inputField'
                type={type}
                maxLength={30}
                showCount
                allowClear
                onInput={(e) => onInputHandler(e)}
                {...other}
            />
        </>
    );
};
