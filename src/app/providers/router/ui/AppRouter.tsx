import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { RouteConfig } from 'shared/config/routeConfig/RouteConfig';
import { PageLoader } from 'widgets/ui/PageLoader';

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {RouteConfig.map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
