import {
  fetchBaseQuery,
  createApi,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1'
})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    tagTypes: ['Users'],
    endpoints:(builder)=>({})
})