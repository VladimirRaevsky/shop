import { type Meta, type StoryObj } from '@storybook/react';

import { MyCard } from './MyCard';

const meta: Meta<typeof MyCard> = {
    title: 'shared/MyCard',
    component: MyCard,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyCard>;
export const Default: Story = {};
