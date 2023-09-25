import { UserOutlined } from '@ant-design/icons';
import { type FC } from 'react';

import { ClassNames } from 'shared/lib';
import { InputForm } from 'shared/ui/InputForm';
import {
    InputFormTheme,
    InputPlaceholder,
    InputType,
} from 'shared/ui/InputForm/ui/InputForm';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className = '' } = props;

    return (
        <form className={ClassNames(cls.loginForm, {}, [className])}>
            <InputForm
                className={cls.input}
                type={InputType.TEXT}
                placeholder={InputPlaceholder.NAME}
                theme={InputFormTheme.SMALL}
                prefix={<UserOutlined />}
            />
            <InputForm
                className={cls.input}
                type={InputType.PASSWORD}
                placeholder={InputPlaceholder.PASSWORD}
                theme={InputFormTheme.SMALL}
            />
        </form>
    );
};
