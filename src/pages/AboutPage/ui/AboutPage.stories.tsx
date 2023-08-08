import { type Meta, type StoryObj } from '@storybook/react'

import AboutPage from './AboutPage'

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,

    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AboutPage>
export const Default: Story = {}
