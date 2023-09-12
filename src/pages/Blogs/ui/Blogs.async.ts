import { lazy } from 'react';

export const BlogsAsync = lazy(async () => await import('./Blogs'));
