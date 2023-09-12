import { type Meta, type StoryObj } from '@storybook/react';

import NotFound from './NotFound';

const meta: Meta<typeof NotFound> = {
    title: 'pages/NotFound',
    component: NotFound,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NotFound>;
export const Default: Story = {};
