import { lazy } from 'react';

export const ContactPageAsync = lazy(async () => await import('./ContactPage'));
