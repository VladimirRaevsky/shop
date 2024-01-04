import { type UserSchema, type User } from '../../types/userSchema';

export const getUserAuthData = (state: UserSchema): User =>
    state?.authData as User;
