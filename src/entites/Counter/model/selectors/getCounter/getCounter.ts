import { type CounterSchema } from '../../types/counterSchema';

import { type StateSchema } from 'entites/Counter/ui/Counter';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
