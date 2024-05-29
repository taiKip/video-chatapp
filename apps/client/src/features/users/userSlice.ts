import { apiSlice } from "../api/apiSlice";
import { UserType } from "./types";

export const extendedUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[],void>({
      query: () => `/users`,
    }),
    login: builder.mutation<UserType, Partial<UserType>>({
      query: (body: Partial<UserType>) => ({
        url: `/users/login`,
        body
      })
    })
  }),
});

export const { useGetUsersQuery,useLoginMutation } = extendedUserApiSlice;
