import { DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID, DEFAULT_LIGHT_THEME, DEFAULT_LIGHT_THEME_ID } from '@/src/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../Store';
import { ILoginInitialState } from './Login.types';

const initialState: ILoginInitialState = {
    phone: '',
    token: '',
    theme: DEFAULT_LIGHT_THEME_ID
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<{ phone: string; token: string }>) => {
            state.phone = action.payload.phone;
            state.token = action.payload.token;
        },
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        }
    }
});

export const { setUserDetails, setTheme } = loginSlice.actions;
export default loginSlice.reducer;

export const tokenFromSlice = (state: RootState) => state.login.token;
export const phoneFromSlice = (state: RootState) => state.login.phone;
export const themeFromSlice = (state: RootState) => state.login.theme;
export const themeObjectFromSlice = (state: RootState) => {
    const themeId = state.login.theme;
    return themeId === DEFAULT_DARK_THEME_ID ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
};
