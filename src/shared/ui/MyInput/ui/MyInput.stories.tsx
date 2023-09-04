import { type Meta, type StoryObj } from '@storybook/react';

import { MyInput } from './MyInput';

const meta: Meta<typeof MyInput> = {
    title: 'shared/MyInput',
    component: MyInput,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyInput>;
export const Default: Story = {};
