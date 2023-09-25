import { type Meta, type StoryObj } from '@storybook/react';

import { InputPlaceholder, InputType } from 'shared/ui/InputForm/ui/InputForm';

import { CustomInput, InputText, InputTheme } from './CustomInput';

const meta: Meta<typeof CustomInput> = {
    title: 'shared/CustomInput',
    component: CustomInput,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomInput>;

export const Search: Story = {
    args: {
        theme: InputTheme.SEARCH,
        type: InputType.TEXT,
        placeholder: InputPlaceholder.SEARCH,
    },
};

export const Subscribe: StoryObj = {
    args: {
        theme: InputTheme.SUBSCRIBE,
        type: InputType.TEXT,
        placeholder: InputPlaceholder.EMAIL,
        subscribe: InputText.SUBSCRIBE,
    },
};
