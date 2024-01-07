import { render, type RenderResult } from '@testing-library/react';

import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { type DeepPartial } from 'redux';

import { StoreProvider } from 'app/providers/StoreProvider';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface ComponentRenderOptions {
    router?: string;
    initialState?: DeepPartial<StateSchema>;
}

const ComponentRender = (
    Component: ReactNode,
    options: ComponentRenderOptions = {},
): RenderResult => {
    const { router = '/', initialState } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[router]}>
                <I18nextProvider i18n={i18nForTest}>
                    {Component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
};

export default ComponentRender;
