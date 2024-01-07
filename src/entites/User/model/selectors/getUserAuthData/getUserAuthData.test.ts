import { type DeepPartial } from '@reduxjs/toolkit';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { getUserAuthData } from './getUserAuthData';

describe('get User AuthData', () => {
    test('should return user data', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: 'max',
                },
            },
        };

        expect(getUserAuthData(state as StateSchema)).toEqual({
            id: '1',
            username: 'max',
        });
    });
});
