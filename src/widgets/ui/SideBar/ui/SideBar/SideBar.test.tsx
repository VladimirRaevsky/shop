import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { SideBar } from './SideBar'
import ComponentRender from 'shared/lib/helpers/tests/componentRender/ComponentRender'

describe('sidebar', () => {
    test('should open and close the sidebar on button click', () => {
        ComponentRender(<SideBar />)
        const sidebar = screen.getByTestId('sidebar')
        const button = screen.getByTestId('sidebar-toggle')

        // Проверяем, что sidebar изначально скрыт
        expect(sidebar).not.toHaveClass('collapsed')

        // Нажимаем на кнопку для открытия sidebar
        fireEvent.click(button)

        // Проверяем, что sidebar отображается после нажатия на кнопку
        expect(sidebar).toHaveClass('collapsed')

        // Нажимаем на кнопку для закрытия sidebar
        fireEvent.click(button)

        // Проверяем, что sidebar скрыт после нажатия на кнопку закрытия
        expect(sidebar).not.toHaveClass('collapsed')
    })

    test('with only first param', () => {
        ComponentRender(<SideBar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
})
