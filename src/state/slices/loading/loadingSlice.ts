import { RootState } from '@/src/state/Store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoadingInitialState } from './types';

const initialState: ILoadingInitialState = {
    isLoading: false,
    loadingMessage: ''
};
const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<{ isLoading: boolean; loadingMessage?: string }>) => {
            state.isLoading = action.payload.isLoading;
            state.loadingMessage = action.payload.loadingMessage ?? '';
        }
    }
});

export default loadingSlice.reducer;
export const { setLoading } = loadingSlice.actions;

export const loadingStateFromSlice = (state: RootState) => state.loading?.isLoading;
export const loadingMessageFromSlice = (state: RootState) => state.loading?.loadingMessage;
