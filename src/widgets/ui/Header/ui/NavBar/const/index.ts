export interface ListType {
    id: number;
    to: string;
    text: string;
    hover: boolean;
}

export const LIST_ITEMS: ListType[] = [
    { id: 1, to: '/', text: 'главная', hover: true },
    { id: 2, to: 'about', text: 'о нас', hover: false },
    { id: 3, to: 'blogs', text: 'блоги', hover: false },
    { id: 4, to: 'contact', text: 'контакт', hover: false },
    { id: 5, to: 'cart', text: 'корзина', hover: false },
    { id: 6, to: 'checkout', text: 'доставка', hover: false },
    { id: 7, to: 'shop', text: 'магазин', hover: false },
];
