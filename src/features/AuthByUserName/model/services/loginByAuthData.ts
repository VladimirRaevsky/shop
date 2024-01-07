import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { userActions, type User } from 'entites/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface loginByAuthDataProps {
    username: string;
    password: string;
}

export const loginByAuthData = createAsyncThunk<
    User,
    loginByAuthDataProps,
    { rejectValue: string }
>('loginByUsername', async (authData, thunkAPI) => {
    try {
        const response = await axios.post<User>(
            'http://localhost:8000/login',
            authData,
        );

        if (response.data === null || response.data === undefined) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        );

        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(i18n.t('Неверный пароль или логин'));
    }
});
