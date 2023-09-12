import { type FC, Suspense, useEffect } from 'react';

import { AppRouter } from 'app/providers/router';
import { ClassNames, useTheme } from 'shared/lib';
import { Container } from 'shared/ui/Container';
import { AppLoader } from 'widgets/ui/AppLoader';
import { Header } from 'widgets/ui/Header';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    const { theme } = useTheme();

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Header />

            <Suspense fallback={<AppLoader />}>
                <div className='page-content'>
                    <Container>
                        <AppRouter />
                    </Container>
                </div>
            </Suspense>
        </div>
    );
};
