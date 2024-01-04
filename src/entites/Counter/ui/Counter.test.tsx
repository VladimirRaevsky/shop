import { fireEvent, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import ComponentRender from 'shared/lib/helpers/tests/componentRender/ComponentRender';

import { Counter } from './Counter';

describe('Counter', () => {
    test('output check value', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
                loginForm: {
                    isLoading: false,
                    password: '',
                    username: 'name',
                },
                user: {
                    authData: {
                        id: '1',
                        username: 'name',
                    },
                },
            },
        });
        const title = screen.getByTestId('title');
        expect(title).toHaveTextContent('10');
    });

    test('checking for incriment and decriment', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 1,
                },
                loginForm: {
                    isLoading: false,
                    password: '',
                    username: 'name',
                },
                user: {
                    authData: {
                        id: '1',
                        username: 'name',
                    },
                },
            },
        });

        fireEvent.click(screen.getByTestId('decriment-btn'));
        expect(screen.getByTestId('title')).toHaveTextContent('value = 0');

        fireEvent.click(screen.getByTestId('incriment-btn'));
        expect(screen.getByTestId('title')).toHaveTextContent('value = 1');
    });
});
