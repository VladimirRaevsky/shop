import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserPassword = (state: StateSchema): string =>
    state?.loginForm?.password;
