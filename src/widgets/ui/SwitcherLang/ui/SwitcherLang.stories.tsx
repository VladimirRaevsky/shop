import { type Meta, type StoryObj } from '@storybook/react';

import { SwitcherLang } from './SwitcherLang';
// import '../../../config/i18n/i18nForStorybook';

const meta: Meta<typeof SwitcherLang> = {
    title: 'widgets/SwitcherLang',
    component: SwitcherLang,

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SwitcherLang>;

export const Default: Story = {
    args: {},
};
