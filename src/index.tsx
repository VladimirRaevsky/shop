import { App } from "app";
import { ErrorBoundary } from "app/providers/errorBoundary";
import { ThemeProvider } from "app/providers/ThemeProviders";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "shared/config/i18n/i18n";

import "app/styles/index.scss";

const root = createRoot(document.getElementById('root') as Element)

root.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>
);
