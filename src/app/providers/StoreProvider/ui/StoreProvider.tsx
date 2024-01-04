import { Provider } from 'react-redux';

import { CreateRedaxStore } from '../config/store';
import { type StoreProviderProps } from '../types';

export const StoreProvider = (props: StoreProviderProps): JSX.Element => {
    const { children, initialState } = props;

    const store = CreateRedaxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
