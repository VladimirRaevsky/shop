import { type Meta, type StoryObj } from '@storybook/react'

import ContactPage from './ContactPage'

const meta: Meta<typeof ContactPage> = {
    title: 'pages/ContactPage',
    component: ContactPage,

    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ContactPage>
export const Default: Story = {}
