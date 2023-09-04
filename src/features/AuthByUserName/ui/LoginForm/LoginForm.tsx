import { type FC } from 'react';
import { ClassNames } from 'shared/lib';
import { MyInput } from 'shared/ui/MyInput';
import {
    MyInputPlaceholder,
    MyInputSize,
    MyInputTheme,
    MyInputType,
} from 'shared/ui/MyInput/ui/MyInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.loginForm, {}, [className])}>
            <MyInput
                className={cls.input}
                size={MyInputSize.M}
                type={MyInputType.TEXT}
                placeholder={MyInputPlaceholder.NAME}
                theme={MyInputTheme.AUTH_NAME}
            />
            <MyInput
                className={cls.input}
                size={MyInputSize.M}
                type={MyInputType.PASSWORD}
                placeholder={MyInputPlaceholder.PASSWORD}
                theme={MyInputTheme.AUTH_PASSWORD}
            />
        </div>
    );
};
