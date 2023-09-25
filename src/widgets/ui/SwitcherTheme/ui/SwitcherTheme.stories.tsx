import { type Meta, type StoryObj } from '@storybook/react';

import { SwitcherTheme } from './SwitcherTheme';
// import '../../../config/i18n/i18nForStorybook';

const meta: Meta<typeof SwitcherTheme> = {
    title: 'widgets/SwitcherTheme',
    component: SwitcherTheme,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SwitcherTheme>;

export const Default: Story = {
    args: {},
};
