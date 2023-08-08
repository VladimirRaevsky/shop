import { type FC } from "react";
import { ClassNames } from "shared/lib";
import { AppLink } from "shared/ui/AppLink";
import cls from "./NavBar.module.scss";

interface NavBarProps {
	className?: string;
}

export const NavBar: FC<NavBarProps> = (props) => {
	const { className = "" } = props;

	return (
		<nav className={ClassNames(cls.navBar, {}, [className])}>
			<ul className={cls.list}>
				<li className={cls.item}>
					<AppLink to="/">HOME</AppLink>
				</li>
				<li className={cls.item}>
					<AppLink to="about">ABOUT</AppLink>
				</li>
				<li className={cls.item}>
					<AppLink to="blogs">BLOGS</AppLink>
				</li>
				<li className={cls.item}>
					<AppLink to="contact">CONTACT</AppLink>
				</li>
				<li className={cls.item}>
					<AppLink to="cart">CART</AppLink>
				</li>
				<li className={cls.item}>
					<AppLink to="checkout">CHECKOUT</AppLink>
				</li>
				<li className={cls.item}>
					<AppLink to="SHOP">SHOP</AppLink>
				</li>
			</ul>
		</nav>
	);
};
