import { AboutPage } from 'pages/AboutPage';
import { BlogsPage } from 'pages/Blogs';
import { ContactPage } from 'pages/Contact';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { CheckoutPage } from 'pages/CheckoutPage';
import { type RouteProps } from 'react-router-dom';
import { CartPage } from 'pages/Cart';
import { ShopPage } from 'pages/Shop';
import { ErrorPage } from 'pages/PageError';

export enum AppRoutes {
    MAIN = '/',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
    CHECKOUT = 'checkout',
    BLOGS = 'blogs',
    CONTACT = 'contact',
    CART = 'cart',
    SHOP = 'shop',
    ERROR = 'error',
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.CHECKOUT]: '/checkout',
    [AppRoutes.BLOGS]: '/blogs',
    [AppRoutes.CONTACT]: '/contact',
    [AppRoutes.CART]: '/cart',
    [AppRoutes.SHOP]: '/shop',
    [AppRoutes.ERROR]: '/error',
    [AppRoutes.NOT_FOUND]: '*',
};

export const RouteConfig: RouteProps[] = [
    { path: RoutePaths[AppRoutes.MAIN], element: <MainPage /> },
    { path: RoutePaths[AppRoutes.ABOUT], element: <AboutPage /> },
    { path: RoutePaths[AppRoutes.CHECKOUT], element: <CheckoutPage /> },
    { path: RoutePaths[AppRoutes.BLOGS], element: <BlogsPage /> },
    { path: RoutePaths[AppRoutes.CONTACT], element: <ContactPage /> },
    { path: RoutePaths[AppRoutes.CART], element: <CartPage /> },
    { path: RoutePaths[AppRoutes.SHOP], element: <ShopPage /> },
    { path: RoutePaths[AppRoutes.NOT_FOUND], element: <NotFound /> },
    {
        path: RoutePaths[AppRoutes.ERROR],
        element: <ErrorPage />,
        errorElement: <ErrorPage />,
    },
];
