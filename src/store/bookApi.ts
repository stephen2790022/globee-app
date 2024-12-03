import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dev-app-api.abceed.com" }),
  endpoints: (builder) => ({
    // Endpoint pour récupérer tous les livres
    fetchBooks: builder.query({
      query: () => "/mock/book/all",
    }),
  }),
});
