import { type FC } from 'react';

import { LoginForm } from '../LoginForm/LoginForm';

import { ClassNames } from 'shared/lib';

import { Modal } from 'shared/ui/Modal';

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
            <LoginForm isOpen={isOpen} />
        </Modal>
    );
};
