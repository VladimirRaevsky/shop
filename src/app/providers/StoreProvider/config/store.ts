import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entites/Counter';
import { userReducer } from 'entites/User';
import { loginReducer } from 'features/AuthByUserName';
import { StateSchema } from './StateSchema';

export function CreateRedaxStore(initialState?: StateSchema) {
    const rootRedusers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootRedusers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export const store = CreateRedaxStore();
export type AppDispatch = typeof store.dispatch;
