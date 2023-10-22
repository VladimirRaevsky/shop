import { UserOutlined } from '@ant-design/icons';

import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import { Text } from 'shared/ui/Text';

import { TextTheme } from 'shared/ui/Text/ui/Text';

import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen: boolean;
}

export const LoginForm = memo(function LoginForm(props: LoginFormProps) {
    const { className = '', isOpen } = props;

    const { t } = useTranslation();

    const [{ usernameValue, passwordValue }, setStatus] = useState<
        Record<string, 'error' | undefined>
    >({
        usernameValue: undefined,
        passwordValue: undefined,
    });

    const dispatch = useAppDispatch();

    const { username, password, isLoading, error } = useSelector(getLoginState);

    const handlerOnChangeUsername = useCallback(
        (value: string): void => {
            setStatus((prev) => {
                return {
                    ...prev,
                    usernameValue:
                        value.trim().length < 5 ? 'error' : undefined,
                };
            });

            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const handlerOnChangePassword = useCallback(
        (value: string): void => {
            setStatus((prev) => {
                return {
                    ...prev,
                    passwordValue:
                        value.trim().length < 5 ? 'error' : undefined,
                };
            });

            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const handlerOnLogin = useCallback(() => {
        void dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <form
            className={ClassNames(cls.loginForm, {}, [className])}
            onClick={(e) => {
                e.preventDefault();
            }}
        >
            {<Text title={t('Форма авторизации')} />}
            {error != null && (
                <Text description={error} theme={TextTheme.ERROR} />
            )}
            <InputForm
                className={cls.input}
                type={InputType.TEXT}
                placeholder={InputPlaceholder.NAME}
                theme={InputFormTheme.SMALL}
                prefix={<UserOutlined />}
                onChange={handlerOnChangeUsername}
                value={username}
                status={usernameValue}
            />
            <InputForm
                className={cls.input}
                type={InputType.PASSWORD}
                placeholder={InputPlaceholder.PASSWORD}
                theme={InputFormTheme.SMALL}
                onChange={handlerOnChangePassword}
                value={password}
                status={passwordValue}
            />
            <CustomButton
                type={ButtonType.SUBMIT}
                theme={ButtonTheme.SUBMIT}
                onClick={handlerOnLogin}
                disabled={isLoading}
            >
                отправить
                <Ripple duration={3000} color='red' />
            </CustomButton>
        </form>
    );
});
