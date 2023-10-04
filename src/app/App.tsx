import { type FC, Suspense } from 'react';

import { AppRouter } from 'app/providers/router';
import { ClassNames, useTheme } from 'shared/lib';
import { Container } from 'shared/ui/Container';
import { AppLoader } from 'widgets/ui/AppLoader';
import { Footer } from 'widgets/ui/Footer';
import { Header } from 'widgets/ui/Header';
import { SideBar } from 'widgets/ui/SideBar';

interface AppProps {
    className?: string;
}

export const App: FC<AppProps> = () => {
    const { theme } = useTheme();

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Header />

            <SideBar />
            <Suspense fallback={<AppLoader />}>
                <div className='page-content'>
                    <Container>
                        <AppRouter />
                    </Container>
                </div>
            </Suspense>
            <Footer />
        </div>
    );
};
