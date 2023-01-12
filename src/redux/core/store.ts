import {configureStore} from '@reduxjs/toolkit'
import { api } from '../server/services/api';
import counterSlice from '../client/counterSlice';
export const store = configureStore({
    reducer: {
        //client side 
        count: counterSlice,
        //server side (api calls)
        [api.reducerPath] : api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type ActionDispatch = typeof store.dispatch;