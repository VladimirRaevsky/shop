import { AppRouter } from "app/providers/router";
import { type FC, Suspense, useEffect } from "react";
import { ClassNames, useTheme } from "shared/lib";
import { AppLoader } from "widgets/ui/AppLoader";
import { Header } from "widgets/ui/Header";

interface AppProps {
	className?: string;
}

export const App: FC<AppProps> = () => {
	const { theme } = useTheme();

	useEffect(() => {
		if (Math.random() * 5 < 1) {
			throw Error();
		}
	}, []);

	return (
		<div className={ClassNames("app", {}, [theme])}>
            <Header/>
            
			<Suspense fallback={<AppLoader />}>
				<div className="page-content">
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
