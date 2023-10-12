import { AppRoutes } from 'shared/config/routeConfig/RouteConfig';

export interface ListType {
    readonly id: number;
    readonly to: AppRoutes;
    readonly text: string;
    hover: boolean;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const __LIST_ITEMS__: ListType[] = [
    { id: 1, to: AppRoutes.MAIN, text: 'главная', hover: true },
    { id: 2, to: AppRoutes.ABOUT, text: 'о нас', hover: false },
    { id: 3, to: AppRoutes.BLOGS, text: 'блоги', hover: false },
    { id: 4, to: AppRoutes.CONTACT, text: 'контакт', hover: false },
    { id: 5, to: AppRoutes.CART, text: 'корзина', hover: false },
    { id: 6, to: AppRoutes.CHECKOUT, text: 'доставка', hover: false },
    { id: 7, to: AppRoutes.SHOP, text: 'магазин', hover: false },
];
