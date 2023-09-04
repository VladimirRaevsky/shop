import { AppRouter } from 'app/providers/router';
import { type FC, Suspense, useEffect } from 'react';
import { ClassNames, useTheme } from 'shared/lib';
import { MyContainer } from 'shared/ui/MyContainer';
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
                    <MyContainer>
                        <AppRouter />
                    </MyContainer>
                </div>
            </Suspense>
        </div>
    );
};
