import { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { counterActions } from '../model/slice/counterSlice';
import { type CounterSchema } from '../model/types/counterSchema';

export interface StateSchema {
    counter: CounterSchema;
}

export const Counter: FC = () => {
    const dispatch = useDispatch();

    const counterValue = useSelector(
        (state: StateSchema) => state.counter.value,
    );

    const decriment = (): void => {
        dispatch(counterActions.decrement());
    };

    const incriment = (): void => {
        dispatch(counterActions.increment());
    };

    return (
        <>
            <h1 data-testid='title'>value = {counterValue}</h1>
            <button data-testid='incriment-btn' onClick={incriment}>
                incriment
            </button>
            <button data-testid='decriment-btn' onClick={decriment}>
                decriment
            </button>
        </>
    );
};
