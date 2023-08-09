import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'entites/Counter/ui/Counter';

import { getCounter } from './getCounter';

describe('get Counter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
