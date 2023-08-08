import { type Meta, type StoryObj } from '@storybook/react'

import { PageError } from './PageError'

const meta: Meta<typeof PageError> = {
    title: 'pages/PageError',
    component: PageError,

    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PageError>
export const Default: Story = {}

