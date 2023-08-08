import { type FC } from "react";
import { ClassNames, useTheme } from "shared/lib";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";

import { Icon } from "@iconify/react";

import cls from "./ThemeSwitcherButton.module.scss";
import { Theme } from "app/providers/ThemeProviders/lib/ThemeContext";

interface SwitcherButtonProps {
	className?: string;
}

export const ThemeSwitcherButton: FC<SwitcherButtonProps> = () => {
	const { theme, themeToggleHandler } = useTheme();

	return (
		<Button onClick={themeToggleHandler} theme={ButtonTheme.CLEAR}>
			{
				<Icon
					className={cls.bg}
					icon="ion:switch-outline"
					rotate={2}
                    width="40"
					flip={theme === Theme.DARK ? "horizontal" : ""}
				/>
			}
		</Button>
	);
};
