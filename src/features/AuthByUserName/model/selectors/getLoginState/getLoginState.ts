import { type LoginSchema } from '../../types/loginSchema';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getLoginState = (value: StateSchema): LoginSchema =>
    value?.loginForm;
