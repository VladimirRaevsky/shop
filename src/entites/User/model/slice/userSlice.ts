import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type User, type UserSchema } from '../types/userSchema';

import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },

        initialUser: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (user != null) {
                state.authData = JSON.parse(user);
            }
        },

        logoutUser: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
