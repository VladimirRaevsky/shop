import { UserOutlined } from '@ant-design/icons';
import { t } from 'i18next';
import { type FC } from 'react';

import { ClassNames } from 'shared/lib';
import { CustomButton } from 'shared/ui/CustomButton';
import { ButtonTheme, ButtonType } from 'shared/ui/CustomButton/types';

import { InputForm } from 'shared/ui/InputForm';
import {
    InputFormTheme,
    InputPlaceholder,
    InputType,
} from 'shared/ui/InputForm/types';
import { Ripple } from 'shared/ui/Ripple';
import { Text } from 'shared/ui/Text';

import cls from './RegistrationForm.module.scss';

interface RegistrationFormProps {
    className?: string;
}

export const RegistrationForm: FC<RegistrationFormProps> = (props) => {
    const { className = '' } = props;

    return (
        <div className={ClassNames(cls.registrationForm, {}, [className])}>
            <form
                className={ClassNames(cls.loginForm, {}, [className])}
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                {<Text title={t('Форма регистрации')} />}
                {/* {error != null && <Text description={error} />} */}
                <InputForm
                    className={cls.input}
                    type={InputType.TEXT}
                    placeholder={InputPlaceholder.NAME}
                    theme={InputFormTheme.SMALL}
                    prefix={<UserOutlined />}
                    // onChange={handlerOnChangeUsername}
                    // value={username}
                    // status={usernameValue}
                />
                <InputForm
                    className={cls.input}
                    type={InputType.PASSWORD}
                    placeholder={InputPlaceholder.PASSWORD}
                    theme={InputFormTheme.SMALL}
                    // onChange={handlerOnChangePassword}
                    // value={password}
                    // status={passwordValue}
                />
                <CustomButton
                    type={ButtonType.SUBMIT}
                    theme={ButtonTheme.SUBMIT}
                    // onClick={handlerOnLogin}
                    // disabled={isLoading}
                >
                    {t('Зарегистрироваться')}
                    <Ripple duration={3000} color='red' />
                </CustomButton>
            </form>
        </div>
    );
};
