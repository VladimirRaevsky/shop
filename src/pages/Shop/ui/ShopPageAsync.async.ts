import { lazy } from 'react'

export const ShopPageAsync = lazy(async () => await import('./ShopPage'))

// async () =>
//     await new Promise((resolve) => {
//       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//       // @ts-expect-error
//       // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//       setTimeout(() => { resolve(import('./MainPage')) }, 10000)
//     })
