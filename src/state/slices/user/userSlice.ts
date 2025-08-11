import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../Store';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        investments: [],
        baskets: []
    },
    reducers: {
        setInvestments: (state, action) => {
            state.investments = action.payload;
        },
        setBaskets: (state, action) => {
            state.baskets = action.payload;
        }
    }
});

export const { setInvestments, setBaskets } = userSlice.actions;
export default userSlice.reducer;

export const investmentsFromSlice = (state: RootState) => state.user.investments;
export const basketsFromSlice = (state: RootState) => state.user.baskets;
