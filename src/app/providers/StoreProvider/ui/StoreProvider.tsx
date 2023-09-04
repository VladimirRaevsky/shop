import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type StateSchema } from '../config/StateSchema';
import { CreateRedaxStore } from '../config/store';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}

export const StoreProvider = (props: StoreProviderProps): JSX.Element => {
    const { children, initialState } = props;

    const store = CreateRedaxStore(initialState);

    return <Provider store={store}>{children}</Provider>;
};
