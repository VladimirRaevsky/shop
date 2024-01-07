import { type DeepPartial } from 'redux';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { getError } from './getError';

describe('getError.test', () => {
    test('should return "error"', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };

        expect(getError(state as StateSchema)).toEqual('error');
    });

    test('should return "undefined"', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getError(state as StateSchema)).toEqual(undefined);
    });
});
