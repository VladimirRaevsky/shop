import { type Meta, type StoryObj } from '@storybook/react';

import Phone from '../../../assets/icons/phone.png';

import { CardProduct } from './CardProduct';

const meta: Meta<typeof CardProduct> = {
    title: 'shared/CardProduct',
    component: CardProduct,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CardProduct>;
export const Default: Story = {
    args: {
        price: 1000,
        title: 'phone',
        url: Phone,
    },
};
