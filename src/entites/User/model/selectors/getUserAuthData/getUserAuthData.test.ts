import { type UserSchema } from 'entites/User';

import { getUserAuthData } from './getUserAuthData';

describe('get User AuthData', () => {
    test('should return user data', () => {
        const state: UserSchema = {
            authData: {
                id: '1',
                username: 'max',
            },
        };

        expect(getUserAuthData(state)).toEqual({
            id: '1',
            username: 'max',
        });
    });
});
