import { type Meta, type StoryObj } from '@storybook/react';

import { InputType } from 'shared/ui/CustomInput/ui/CustomInput';

import { InputForm, InputFormSize } from './InputForm';

const meta: Meta<typeof InputForm> = {
    title: 'shared/InputForm',
    component: InputForm,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputForm>;
export const Default: Story = {
    args: {
        placeholder: 'Your email address here',
        size: InputFormSize.M,
    },
};

export const InputNumber: StoryObj = {
    args: {
        ...Default.args,
        type: InputType.NUMBER,
        desc: 'Phone',
        size: InputFormSize.L,
    },
};

export const InputPassword: StoryObj = {
    args: {
        ...Default.args,
        type: InputType.PASSWORD,
        desc: 'Password',
        size: InputFormSize.M,
    },
};

export const InputText: StoryObj = {
    args: {
        ...Default.args,
        type: InputType.TEXT,
        desc: 'First name',
        size: InputFormSize.L,
    },
};
