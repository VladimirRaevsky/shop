import { StyleProvider } from '@ant-design/cssinjs';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { App } from 'app';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProviders';

import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';

const root = createRoot(document.getElementById('root') as Element);

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <StyleProvider hashPriority='high'>
                        <App />
                    </StyleProvider>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
