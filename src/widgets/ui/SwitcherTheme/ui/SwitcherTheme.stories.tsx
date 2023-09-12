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

// export const ClearLight: Story = {
//     args: {
//         ...Default.args,
//         theme: ButtonTheme.SECONDARY,
//     },
//     parameters: {
//         backgrounds: {
//             values: [
//                 { name: 'red', value: '#f00', color: '#fff' },
//                 { name: 'green', value: '#0f0' },
//                 { name: 'blue', value: '#00f' },
//             ],
//         },
//     },
// };
