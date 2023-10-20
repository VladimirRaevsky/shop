import { UserOutlined } from '@ant-design/icons';

import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';

import { ClassNames, useAppDispatch } from 'shared/lib';
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
    isOpen: boolean;
}

export const LoginForm = memo(function LoginForm(props: LoginFormProps) {
    const { className = '', isOpen } = props;

    const dispatch = useAppDispatch();

    const { username, password } = useSelector(getLoginState);

    const handlerOnChangeUsername = useCallback(
        (value: string): void => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const handlerOnChangePassword = useCallback(
        (value: string): void => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const handlerOnLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <form
            className={ClassNames(cls.loginForm, {}, [className])}
            onClick={(e) => {
                e.preventDefault();
            }}
        >
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
            <CustomButton
                type={ButtonType.SUBMIT}
                theme={ButtonTheme.SUBMIT}
                onClick={handlerOnLogin}
            >
                отправить
                <Ripple duration={3000} color='red' />
            </CustomButton>
        </form>
    );
});
