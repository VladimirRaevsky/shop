import { UserOutlined } from '@ant-design/icons';

import { memo, useCallback, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';

import { ClassNames } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';
import {
    ButtonTheme,
    ButtonType,
} from 'shared/ui/CustomButton/ui/CustomButton';
import { InputForm } from 'shared/ui/InputForm';
import {
    InputFormTheme,
    InputPlaceholder,
    InputType,
} from 'shared/ui/InputForm/ui/InputForm';
import { Ripple } from 'shared/ui/Ripple';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(function LoginForm(props: LoginFormProps) {
    const { className = '' } = props;

    const dispatch = useDispatch();

    const { username, password } = useSelector(getLoginState);

    const handlerOnChangeUsername = useCallback(
        (value: string): void => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );

    const handlerOnChangePassword = useCallback(
        (value: string): void => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    return (
        <form className={ClassNames(cls.loginForm, {}, [className])}>
            <InputForm
                className={cls.input}
                type={InputType.TEXT}
                placeholder={InputPlaceholder.NAME}
                theme={InputFormTheme.SMALL}
                prefix={<UserOutlined />}
                onChange={handlerOnChangeUsername}
                value={username}
            />
            <InputForm
                className={cls.input}
                type={InputType.PASSWORD}
                placeholder={InputPlaceholder.PASSWORD}
                theme={InputFormTheme.SMALL}
                onChange={handlerOnChangePassword}
                value={password}
            />
            <CustomButton type={ButtonType.SUBMIT} theme={ButtonTheme.SUBMIT}>
                отправить
                <Ripple duration={3000} color='red' />
            </CustomButton>
        </form>
    );
});
