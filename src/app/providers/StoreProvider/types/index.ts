import { type ReactNode } from 'react';

import { type StateSchema } from '../config/StateSchema';

export interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}
