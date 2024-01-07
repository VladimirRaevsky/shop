import { type DeepPartial } from 'redux';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { getUserName } from './getUserName';

describe('getUsername.test', () => {
    test('should return "admin" value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'admin',
            },
        };

        expect(getUserName(state as StateSchema)).toEqual('admin');
    });

    test('should return "undefined" value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserName(state as StateSchema)).toEqual(undefined);
    });
});
