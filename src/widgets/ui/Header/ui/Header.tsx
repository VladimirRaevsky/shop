import { useCallback, useState, type FC } from "react";
import { Modal } from "shared/ui/Modal";
import { ClassNames } from "shared/lib";
import { Button } from "shared/ui/Button";

import cls from "./Header.module.scss";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { useTranslation } from "react-i18next";
import { ThemeSwitcherButton } from "widgets/ui/SwitcherButton";
import { NavBar } from "./NavBar";

interface HeaderProps {
	className?: string;
}

export const Header: FC<HeaderProps> = () => {
	const [isAuth, setIsAuth] = useState(false);

	const { t } = useTranslation();

	const isAuthHandler = useCallback((): void => {
		setIsAuth((prev) => !prev);
	}, []);

	return (
		<header className={ClassNames(cls.Header, {}, [])}>
			<div className={cls.logo}>MiniStore</div>
			<div className="center">
				<NavBar />
			</div>
			<div className="right">
				<ThemeSwitcherButton />
				<Button
					theme={ButtonTheme.BACKGROUND}
					className={cls.right}
					onClick={isAuthHandler}
				>
					{t("Войти")}
				</Button>
			</div>
		</header>
	);
};
