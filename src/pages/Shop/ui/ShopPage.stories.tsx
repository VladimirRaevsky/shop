import { type Meta, type StoryObj } from '@storybook/react';

import ShopPage from './ShopPage';

const meta: Meta<typeof ShopPage> = {
    title: 'pages/ShopPage',
    component: ShopPage,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ShopPage>;

export const Default: Story = {};
