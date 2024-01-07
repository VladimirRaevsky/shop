import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserName = (state: StateSchema): string =>
    state?.loginForm?.username;
