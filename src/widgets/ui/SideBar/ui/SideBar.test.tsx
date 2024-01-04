import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import ComponentRender from 'shared/lib/helpers/tests/componentRender/ComponentRender';

import { SideBar } from './SideBar';

describe('sidebar', () => {
    test('with only first param', () => {
        ComponentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should open and close the sidebar on button click', () => {
        ComponentRender(<SideBar />);
        const sidebar = screen.getByTestId('sidebar');
        const button = screen.getByTestId('button');

        expect(sidebar).not.toHaveClass('collapsed');

        fireEvent.click(button);

        expect(sidebar).toHaveClass('collapsed');

        fireEvent.click(button);

        expect(sidebar).not.toHaveClass('collapsed');
    });
});
