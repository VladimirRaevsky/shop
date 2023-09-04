import { type Meta, type StoryObj } from '@storybook/react';

import ErrorPage  from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
    title: 'pages/PageError',
    component: ErrorPage,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ErrorPage>;
export const Default: Story = {};
