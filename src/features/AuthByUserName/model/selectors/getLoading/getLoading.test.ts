import { type DeepPartial } from 'redux';

import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { getLoading } from './getLoading';

describe('getLoading.test', () => {
    test('should return "true"', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoading(state as StateSchema)).toBeTruthy();
    });

    test('should return "false"', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };

        expect(getLoading(state as StateSchema)).toBeFalsy();
    });

    test('should return "false" ', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoading(state as StateSchema)).toBeFalsy();
    });
});
