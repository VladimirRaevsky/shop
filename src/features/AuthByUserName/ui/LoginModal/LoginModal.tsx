import { type FC } from 'react';

import { LoginForm } from '../LoginForm/LoginForm';

import { ClassNames } from 'shared/lib';

import { CustomButton } from 'shared/ui/CustomButton';
import {
    ButtonTheme,
    ButtonType,
} from 'shared/ui/CustomButton/ui/CustomButton';
import { Modal } from 'shared/ui/Modal';
import { Ripple } from 'shared/ui/Ripple';

import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className = '', isOpen, onClose } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={ClassNames(cls.loginModal, {}, [className])}
        >
            <LoginForm />
            <CustomButton type={ButtonType.SUBMIT} theme={ButtonTheme.SUBMIT}>
                отправить
                <Ripple duration={3000} color='red' />
            </CustomButton>
        </Modal>
    );
};
