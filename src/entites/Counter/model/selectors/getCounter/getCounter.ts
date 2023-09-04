import { type StateSchema } from 'entites/Counter/ui/Counter';
import { type CounterSchema } from '../../types/counterSchema';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
