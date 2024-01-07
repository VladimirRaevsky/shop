import { type DeepPartial } from 'redux';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { getUserPassword } from './getUserPassword';

describe('getUser password.test', () => {
    test('should return password "12345"', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '12345',
            },
        };

        expect(getUserPassword(state as StateSchema)).toEqual('12345');
    });

    test('should return "undefined" value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getUserPassword(state as StateSchema)).toEqual(undefined);
    });
});
