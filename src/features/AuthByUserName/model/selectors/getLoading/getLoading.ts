import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoading = (state: StateSchema): boolean =>
    state?.loginForm?.isLoading;
