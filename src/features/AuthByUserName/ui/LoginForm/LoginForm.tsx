import { type FC } from 'react';

import { ClassNames } from 'shared/lib';
import { CustomInput } from 'shared/ui/CustomInput';
import {
    InputPlaceholder,
    InputSize,
    InputTheme,
    InputType,
} from 'shared/ui/CustomInput/ui/CustomInput';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className = '' } = props;

    return (
        <form className={ClassNames(cls.loginForm, {}, [className])}>
            <CustomInput
                className={cls.input}
                size={InputSize.M}
                type={InputType.TEXT}
                placeholder={InputPlaceholder.NAME}
                theme={InputTheme.AUTH_NAME}
                status='warning'
            />
            <CustomInput
                className={cls.input}
                size={InputSize.M}
                type={InputType.PASSWORD}
                placeholder={InputPlaceholder.PASSWORD}
                theme={InputTheme.AUTH_PASSWORD}
            />
        </form>
    );
};
