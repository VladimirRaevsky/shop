import { type Meta, type StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import '../../../../shared/config/i18n/i18nForStorybook'

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,

    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
    args: {
        children: 'Кнопка',
    },
}

export const ClearLight: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.CLEAR,
        sqare: false,
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00', color: '#fff' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
}

export const Border: StoryObj = {
    args: {
        ...Default.args,
        theme: ButtonTheme.BORDER,
        sqare: false,
    },
}

export const ACTIVE = {
    args: {
        ...Default.args,
        theme: ButtonTheme.ACTIVE,
        sqare: false,
    },
}

export const ERROR: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.ERROR,
        sqare: false,
    },
}

export const Clear: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.CLEAR,
        sqare: false,
    },
}

export const SQARE_SIZE_M: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.M,
        sqare: true,
    },
}

export const SQARE_SIZE_L: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.L,
        sqare: true,
    },
}

export const SQARE_SIZE_XL: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.XL,
        sqare: true,
    },
}

export const SIZE_M: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.M,
        sqare: false,
    },
}

export const SIZE_L: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.L,
        sqare: false,
    },
}

export const SIZE_XL: Story = {
    args: {
        children: 'Ru',
        size: ButtonSize.XL,
        sqare: false,
    },
}

export const BACKGROUND: Story = {
    args: {
        ...Default.args,
        theme: ButtonTheme.BACKGROUND,
        sqare: false,
    },
}
