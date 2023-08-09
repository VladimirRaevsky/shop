export interface ListType {
    id: number;
    to: string;
    text: string;
    hover: boolean;
}

export const LIST_ITEMS: ListType[] = [
    { id: 1, to: '/', text: 'HOME', hover: true },
    { id: 2, to: 'about', text: 'ABOUT', hover: false },
    { id: 3, to: 'blogs', text: 'BLOGS', hover: false },
    { id: 4, to: 'contact', text: 'CONTACT', hover: false },
    { id: 5, to: 'cart', text: 'CART', hover: false },
    { id: 6, to: 'checkout', text: 'CHECKOUT', hover: false },
    { id: 7, to: 'shop', text: 'SHOP', hover: false },
];
