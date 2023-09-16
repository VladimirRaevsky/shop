import { render, type RenderResult } from '@testing-library/react';
import { type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import i18nForTest from 'shared/config/i18n/i18nForTest';

export interface ComponentRenderOptions {
    router?: string;
}

const ComponentRender = (
    Component: ReactNode,
    options: ComponentRenderOptions = {},
): RenderResult => {
    const { router = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[router]}>
            <I18nextProvider i18n={i18nForTest}>{Component}</I18nextProvider>
        </MemoryRouter>,
    );
};

export default ComponentRender;
