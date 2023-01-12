import { IUser } from "../../../Models/user.model";
import { api } from "./api";

export const userApi = api.injectEndpoints({
    endpoints:(builder) => ({
        users: builder.query<IUser[], void>({
            query: () => ({
              url: "/users",
              method: "GET",
            }),
            providesTags: ["User"],
          }),
          addUser: builder.mutation<void, IUser>({
            query: (user) => ({
              url: "/users",
              method: "POST",
              body: user,
            }),
            invalidatesTags: ["User"],
          }),
          updateUser: builder.mutation<void, IUser>({
            query: ({ id, ...rest }) => ({
              url: `/users/${id}`,
              method: "PUT",
              body: rest,
            }),
            invalidatesTags: ["User"],
          }),
          deleteUser: builder.mutation<void, number>({
            query: (id) => ({
              url: `/users/${id}`,
              method: "DELETE",
            }),
            invalidatesTags: ["User"],
          }),
    })
});

export const {
    useAddUserMutation, 
    useDeleteUserMutation,
    useUpdateUserMutation,
    useUsersQuery
} = userApi;