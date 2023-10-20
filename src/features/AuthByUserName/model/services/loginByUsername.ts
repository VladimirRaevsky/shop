import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { type User } from 'entites/User';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>(
            'http://localhost:8000/login',
            authData,
        );

        if (response.data === null || response.data === undefined) {
            throw new Error();
        }

        console.log(response.data);

        return response.data;
    } catch (error) {
        console.log(error);
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return thunkAPI.rejectWithValue(`error ${error}`);
    }
});
