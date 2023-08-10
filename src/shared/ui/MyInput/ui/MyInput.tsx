import { type InputHTMLAttributes, type FC } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

import { ClassNames } from 'shared/lib';
import cls from './MyInput.module.scss';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 20,
            color: '#1677ff',
        }}
    />
);

export enum IMyInputSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

export interface IMyInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    type: string;
    placeholder?: string;
    size: IMyInputSize;
    className?: string;
    desc?: string;
}

export const MyInput: FC<IMyInputProps> = (props) => {
    const { type, placeholder, size, desc, className = '' } = props;

    const onSearch = (value: string): void => {
        console.log(value);
    };

    return (
        <Space direction='vertical'>
            <Search
                rootClassName={ClassNames(cls.input, {}, [
                    className,
                    cls[size],
                ])}
                type={type}
                maxLength={30}
                showCount
                placeholder={placeholder}
                allowClear
                enterButton={desc}
                onSearch={onSearch}
            />
        </Space>
    );
};
