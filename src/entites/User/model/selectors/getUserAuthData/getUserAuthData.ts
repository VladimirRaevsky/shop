import { type User } from '../../types/userSchema';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getUserAuthData = (state: StateSchema): User =>
    state.user.authData as User;
