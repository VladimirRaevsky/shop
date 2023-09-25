import { UserOutlined } from '@ant-design/icons';
import { type Meta, type StoryObj } from '@storybook/react';

import { InputForm, InputFormTheme, InputType } from './InputForm';

const meta: Meta<typeof InputForm> = {
    title: 'shared/InputForm',
    component: InputForm,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputForm>;

export const InputNumber: StoryObj = {
    args: {
        type: InputType.NUMBER,
        description: 'Phone',
        placeholder: 'Phone',
        theme: InputFormTheme.BIG,
    },
};

export const InputPassword: StoryObj = {
    args: {
        placeholder: 'password',
        type: InputType.PASSWORD,
        theme: InputFormTheme.SMALL,
    },
};

export const InputText: StoryObj = {
    args: {
        placeholder: 'name',
        type: InputType.TEXT,
        theme: InputFormTheme.SMALL,
        prefix: <UserOutlined />,
    },
};
