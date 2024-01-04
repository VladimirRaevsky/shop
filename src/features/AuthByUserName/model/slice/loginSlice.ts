import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { loginByUsername } from '../services/loginByUsername';

import { type LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, actions: PayloadAction<string>) => {
            state.username = actions.payload;
        },
        setPassword: (state, actions: PayloadAction<string>) => {
            state.password = actions.payload;
        },
        clearError: (state) => {
            state.error = undefined;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })

            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })

            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
