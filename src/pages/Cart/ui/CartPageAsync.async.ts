import { lazy } from 'react';

export const CartPageAsync = lazy(async () => await import('./CartPage'));

// async () =>
//     await new Promise((resolve) => {
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-expect-error
//       // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//       setTimeout(() => { resolve(import('./MainPage')) }, 10000)
//     })
