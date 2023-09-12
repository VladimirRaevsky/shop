import { lazy } from 'react';

export const CheckoutPageAsync = lazy(
    async () => await import('./CheckoutPage'),
);
