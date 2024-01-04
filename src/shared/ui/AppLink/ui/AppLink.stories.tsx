import { type Meta, type StoryObj } from '@storybook/react';

import { AppLinkTheme } from '../types';

import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AppLink>;

export const Default: Story = {
    args: {
        children: 'Сылка',
    },
};

export const PRIMARY: Story = {
    args: {
        ...Default.args,
        theme: AppLinkTheme.PRIMARY,
    },
};

export const SECONDARY: StoryObj = {
    args: {
        ...Default.args,
        theme: AppLinkTheme.SECONDARY,
    },
};

export const UNALTERED = {
    args: {
        ...Default.args,
        theme: AppLinkTheme.UNALTERED,
    },
};
