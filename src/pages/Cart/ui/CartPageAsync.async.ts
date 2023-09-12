import { lazy } from 'react';

export const CartPageAsync = lazy(async () => await import('./CartPage'));
