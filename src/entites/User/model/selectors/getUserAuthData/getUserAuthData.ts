import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { type User } from 'entites/User';

export const getUserAuthData = (state: StateSchema): User =>
    state?.user?.authData as User;
