import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../Store';
import { ILoginInitialState } from './Login.types';

const initialState: ILoginInitialState = {
    phone: '',
    token: ''
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<{ phone: string; token: string }>) => {
            state.phone = action.payload.phone;
            state.token = action.payload.token;
        }
    }
});

export const { setUserDetails } = loginSlice.actions;
export default loginSlice.reducer;

export const tokenFromSlice = (state: RootState) => state.login.token;
export const phoneFromSlice = (state: RootState) => state.login.phone;
