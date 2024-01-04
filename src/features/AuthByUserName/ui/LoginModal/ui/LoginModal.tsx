import { t } from 'i18next';
import { useState, type FC } from 'react';

import { LoginForm } from '../../Form/LoginForm/ui/LoginForm';

import { RegistrationForm } from '../../Form/RegistrationForm';

import { ClassNames } from 'shared/lib';

import { CustomButton } from 'shared/ui/CustomButton';

import { ButtonTheme, ButtonType } from 'shared/ui/CustomButton/types';
import { Modal } from 'shared/ui/Modal';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className = '', isOpen, onClose } = props;

    const [register, setRegister] = useState(true);

    const onRegistrationHandler = (): void => {
        setRegister((prev) => !prev);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={ClassNames(cls.loginModal, {}, [className])}
        >
            <>
                {register ? (
                    <RegistrationForm />
                ) : (
                    <LoginForm isOpen={isOpen} />
                )}
                <CustomButton
                    theme={ButtonTheme.REGISTER}
                    type={ButtonType.BUTTON}
                    onClick={onRegistrationHandler}
                    className={cls.button}
                >
                    {register ? t('Авторизоваться') : t('Зарегистрироваться')}
                </CustomButton>
            </>
        </Modal>
    );
};
