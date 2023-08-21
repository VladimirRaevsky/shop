import { type Meta, type StoryObj } from '@storybook/react';

import { MyButton, MyButtonSize, MyButtonTheme } from './MyButton';
import '../../../config/i18n/i18nForStorybook';

const meta: Meta<typeof MyButton> = {
    title: 'shared/Button',
    component: MyButton,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Default: Story = {
    args: {
        children: 'Кнопка',
    },
};

export const ClearLight: Story = {
    args: {
        ...Default.args,
        theme: MyButtonTheme.CLEAR,
        sqare: false,
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00', color: '#fff' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
};

export const Border: StoryObj = {
    args: {
        ...Default.args,
        theme: MyButtonTheme.BORDER,
        sqare: false,
    },
};

export const ACTIVE = {
    args: {
        ...Default.args,
        theme: MyButtonTheme.ACTIVE,
        sqare: false,
    },
};

export const ERROR: Story = {
    args: {
        ...Default.args,
        theme: MyButtonTheme.ERROR,
        sqare: false,
    },
};

export const Clear: Story = {
    args: {
        ...Default.args,
        theme: MyButtonTheme.CLEAR,
        sqare: false,
    },
};

export const SQARE_SIZE_M: Story = {
    args: {
        children: 'Ru',
        size: MyButtonSize.M,
        sqare: true,
    },
};

export const SQARE_SIZE_L: Story = {
    args: {
        children: 'Ru',
        size: MyButtonSize.L,
        sqare: true,
    },
};

export const SQARE_SIZE_XL: Story = {
    args: {
        children: 'Ru',
        size: MyButtonSize.XL,
        sqare: true,
    },
};

export const SIZE_M: Story = {
    args: {
        children: 'Ru',
        size: MyButtonSize.M,
        sqare: false,
    },
};

export const SIZE_L: Story = {
    args: {
        children: 'Ru',
        size: MyButtonSize.L,
        sqare: false,
    },
};

export const SIZE_XL: Story = {
    args: {
        children: 'Ru',
        size: MyButtonSize.XL,
        sqare: false,
    },
};

export const BACKGROUND: Story = {
    args: {
        ...Default.args,
        theme: MyButtonTheme.BACKGROUND,
        sqare: false,
    },
};
