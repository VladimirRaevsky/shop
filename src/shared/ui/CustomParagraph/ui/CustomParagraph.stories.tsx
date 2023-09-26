import { type Meta, type StoryObj } from '@storybook/react';

import { CustomParagraph, CustomParagraphTheme } from './CustomParagraph';

const meta: Meta<typeof CustomParagraph> = {
    title: 'shared/CustomParagraph',
    component: CustomParagraph,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CustomParagraph>;

export const SizeM: Story = {
    args: {
        theme: CustomParagraphTheme.M,
        children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repellat optio quidem fuga rem! Soluta, 
        hic aut. A officia aliquam nisi reiciendis cupiditate ipsum quidem sint voluptates, blanditiis vitae dolorem.`,
    },
};

export const SizeL: Story = {
    args: {
        theme: CustomParagraphTheme.L,
        children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repellat optio quidem fuga rem! Soluta, 
        hic aut. A officia aliquam nisi reiciendis cupiditate ipsum quidem sint voluptates, blanditiis vitae dolorem.`,
    },
};

export const SizeXL: Story = {
    args: {
        theme: CustomParagraphTheme.XL,
        children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repellat optio quidem fuga rem! Soluta, 
        hic aut. A officia aliquam nisi reiciendis cupiditate ipsum quidem sint voluptates, blanditiis vitae dolorem.`,
    },
};
