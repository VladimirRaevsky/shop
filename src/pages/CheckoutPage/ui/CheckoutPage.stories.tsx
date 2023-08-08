import { type Meta, type StoryObj } from '@storybook/react'

import CheckoutPage from './CheckoutPage'

const meta: Meta<typeof CheckoutPage> = {
    title: 'pages/CheckoutPage',
    component: CheckoutPage,

    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CheckoutPage>
export const Default: Story = {}
