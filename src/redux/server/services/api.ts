import {createApi , fetchBaseQuery, retry} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl:'http://localhost:3006/',
    //it will be cover in future.
    // prepareHeaders : (headers, {getState}) => {
    //     const token = (getState() as RootState).auth.token;
    // }
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Time', 'Posts', 'Counter','User'],
  endpoints: () => ({}),
});
