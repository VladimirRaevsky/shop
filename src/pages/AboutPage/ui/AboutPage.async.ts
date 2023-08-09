import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => await import('./AboutPage'));
// export const AboutPageAsync = lazy(async ()=> await import('./AboutPage'))
// export const AboutPageAsync = lazy(
//     async () =>
//         await new Promise((resolve) => {
//             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//             // @ts-expect-error
//             // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
//             setTimeout(() => {
//                 return resolve(import('./AboutPage'))
//             }, 2000)
//         })
// )
