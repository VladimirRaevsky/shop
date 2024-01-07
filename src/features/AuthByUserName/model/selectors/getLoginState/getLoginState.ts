import { type LoginSchema } from '../../types/loginSchema';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginState = (state: StateSchema): LoginSchema =>
    state?.loginForm;
