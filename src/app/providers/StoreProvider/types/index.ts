import { type ReactNode } from 'react';
import { type DeepPartial } from 'redux';

import { type StateSchema } from '../config/StateSchema';

export interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}
