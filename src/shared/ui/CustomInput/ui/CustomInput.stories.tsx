import { type Meta, type StoryObj } from '@storybook/react';

import {
    CustomInput,
    InputPlaceholder,
    InputTheme,
    InputType,
} from './CustomInput';

const meta: Meta<typeof CustomInput> = {
    title: 'shared/CustomInput',
    component: CustomInput,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomInput>;
export const Default: Story = {};
export const Border: StoryObj = {
    args: {
        ...Default.args,
        theme: InputTheme.SUBSCRIBE,
        type: InputType.TEXT,
        placeholder: InputPlaceholder.EMAIL,
    },
};
