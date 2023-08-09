import { type Meta, type StoryObj } from '@storybook/react';

import Blogs from './Blogs';

const meta: Meta<typeof Blogs> = {
    title: 'pages/Blogs',
    component: Blogs,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Blogs>;
export const Default: Story = {};
