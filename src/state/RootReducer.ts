import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import loadingReducer from './slices/loading/loadingSlice';
import loginReducer from './slices/login/LoginSlice';
import userReducer from './slices/user/userSlice';
//reducer combine
const combineReducer = combineReducers({
    login: loginReducer,
    baseApi: baseApi.reducer,
    loading: loadingReducer,
    user: userReducer
});

//state type definitions
export interface IState {
    baseApi: ReturnType<typeof baseApi.reducer>;
    login: ReturnType<typeof loginReducer>;
    loading: ReturnType<typeof loadingReducer>;
    user: ReturnType<typeof userReducer>;
}

const rootReducer = (state: any, action: { type: string }) => {
    if (action.type === 'auth/logout') {
        state = undefined;
    }
    return combineReducer(state, action);
};
export default rootReducer;
