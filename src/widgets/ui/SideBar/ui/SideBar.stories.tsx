import { type Preview, type Meta, type StoryObj } from '@storybook/react';

import { SideBar } from './SideBar';

const meta: Meta<typeof SideBar> = {
    title: 'widgets/SideBar',
    component: SideBar,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SideBar>;

export const Default: Story = {};

export const preview: Preview = {
    parameters: { viewport: { defaultViewport: 'mobile2' } },
};
