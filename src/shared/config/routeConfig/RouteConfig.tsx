import { AboutPage } from "pages/AboutPage";
import { BlogsPage } from "pages/Blogs";
import { ContactPage } from "pages/Contact";
import { MainPage } from "pages/MainPage";
import { NotFound } from "pages/NotFound";
import { CheckoutPage } from "pages/CheckoutPage";
import { type RouteProps } from "react-router-dom";
import { CartPage } from "pages/Cart";
import { ShopPage } from "pages/Shop";

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
	NOT_FOUND = "not_found",
	CHECKOUT = "checkout",
	BLOGS = "blogs",
	CONTACT = "contact",
	CART = "catr",
	SHOP = "shop",
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.CHECKOUT]: "/checkout",
	[AppRoutes.BLOGS]: "/blogs",
	[AppRoutes.CONTACT]: "/contact",
	[AppRoutes.CART]: "/cart",
	[AppRoutes.SHOP]: "/shop",
	[AppRoutes.NOT_FOUND]: "*",
};

export const RouteConfig: RouteProps[] = [
	{ path: RoutePaths[AppRoutes.MAIN], element: <MainPage /> },
	{ path: RoutePaths[AppRoutes.ABOUT], element: <AboutPage /> },
	{ path: RoutePaths[AppRoutes.NOT_FOUND], element: <NotFound /> },
	{ path: RoutePaths[AppRoutes.CHECKOUT], element: <CheckoutPage /> },
	{ path: RoutePaths[AppRoutes.BLOGS], element: <BlogsPage /> },
	{ path: RoutePaths[AppRoutes.CONTACT], element: <ContactPage /> },
	{ path: RoutePaths[AppRoutes.CART], element: <CartPage /> },
	{ path: RoutePaths[AppRoutes.SHOP], element: <ShopPage /> },
];
