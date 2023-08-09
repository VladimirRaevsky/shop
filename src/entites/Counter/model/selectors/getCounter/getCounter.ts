import { type StateSchema } from 'entites/Counter/ui/Counter';

export const getCounter = (state: StateSchema) => state.counter;
