import { type DeepPartial } from 'redux';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { getLoginState } from './getLoginState';

describe('getUsername.test', () => {
    test('should return fields "username password isLoading error"', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
                password: '12345',
                isLoading: false,
                error: undefined,
            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'admin',
            password: '12345',
            isLoading: false,
            error: undefined,
        });
    });

    test('should return "undefined"', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
