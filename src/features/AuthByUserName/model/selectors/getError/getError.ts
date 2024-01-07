import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getError = (state: StateSchema): string | undefined =>
    state?.loginForm?.error;
