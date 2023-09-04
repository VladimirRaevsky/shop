import { type Meta, type StoryObj } from '@storybook/react';

import CartPage from './CartPage';

const meta: Meta<typeof CartPage> = {
    title: 'pages/CartPage',
    component: CartPage,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CartPage>;

export const Default: Story = {};
