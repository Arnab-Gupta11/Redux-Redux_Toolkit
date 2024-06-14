import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
    updateTasksStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    addTasks: builder.mutation({
      query: (tasks) => ({
        url: "/tasks",
        method: "POST",
        body: tasks,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});
export const { useGetTasksQuery, useUpdateTasksStatusMutation, useAddTasksMutation } = baseApi;
