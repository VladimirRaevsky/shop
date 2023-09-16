import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import ComponentRender from 'shared/lib/helpers/tests/componentRender/ComponentRender';

import { Counter } from './Counter';

describe('Counter', () => {
    test('output check value', () => {
        ComponentRender(<Counter />);
        const title = screen.getByTestId('title');
        expect(title).toHaveTextContent('10');
    });

    test('checking for incriment and decriment', () => {
        ComponentRender(<Counter />);

        fireEvent.click(screen.getByTestId('decriment-btn'));
        expect(screen.getByTestId('title')).toHaveTextContent('value = 0');

        fireEvent.click(screen.getByTestId('incriment-btn'));
        expect(screen.getByTestId('title')).toHaveTextContent('value = 1');
    });
});
