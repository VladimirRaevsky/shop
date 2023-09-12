import { type Meta, type StoryObj } from '@storybook/react';

import { CustomButton, ButtonSize, ButtonTheme } from './CustomButton';
import '../../../config/i18n/i18nForStorybook';

const meta: Meta<typeof CustomButton> = {
    title: 'shared/CustomButton',
    component: CustomButton,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const Default: Story = {
    args: {
        children: 'Кнопка',
    },
};

export const ClearLight: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.SECONDARY,
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
        theme: ButtonTheme.PRIMARY,
        sqare: false,
    },
};

export const ERROR: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.ERROR,
    },
};

export const Clear: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.SECONDARY,
    },
};

export const SQARE_SIZE_M: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.M,
    },
};

export const SQARE_SIZE_L: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.L,
    },
};

export const SQARE_SIZE_XL: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.XL,
    },
};

export const SIZE_M: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.M,
    },
};

export const SIZE_L: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.L,
    },
};

export const SIZE_XL: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.XL,
    },
};
