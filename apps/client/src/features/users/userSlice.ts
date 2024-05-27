import { apiSlice } from "../api/apiSlice";
import { UserType } from "./types";

export const extendedUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserType[],void>({
      query: () => `/users`,
    }),
  }),
});

export const { useGetUsersQuery } = extendedUserApiSlice;
