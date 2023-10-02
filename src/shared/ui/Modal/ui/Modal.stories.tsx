import { UserOutlined } from '@ant-design/icons';
import { type Meta, type StoryObj } from '@storybook/react';

import cls from '../../../../features/AuthByUserName/ui/LoginForm/LoginForm.module.scss';

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

import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: (
            <>
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
                <CustomButton
                    type={ButtonType.SUBMIT}
                    theme={ButtonTheme.SUBMIT}
                >
                    отправить
                    <Ripple duration={3000} color='red' />
                </CustomButton>
            </>
        ),
    },
};
