import { type Meta, type StoryObj } from '@storybook/react'

import MainPage from './MainPage'

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,

    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MainPage>

export const Default: Story = {}

