import { type Meta, type StoryObj } from '@storybook/react';

import { ButtonTheme } from '../types';

import SearchIcon from 'shared/assets/icons/header/ion_search.svg';

import { CustomButton } from './CustomButton';

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

export const CLEAR: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.CLEAR,
    },
};

export const Register: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.REGISTER,
    },
};

export const PRIMARY: StoryObj = {
    args: {
        ...Default.args,
        theme: ButtonTheme.PRIMARY,
        sqare: false,
    },
};

export const CIRCLE: StoryObj = {
    args: {
        ...Default.args,
        theme: ButtonTheme.CIRCLE,
        children: <SearchIcon />,
    },
};

export const SQARE: StoryObj = {
    args: {
        theme: ButtonTheme.SQARE,
        children: '+',
    },
};

export const SECONDARY: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.SECONDARY,
    },
};
