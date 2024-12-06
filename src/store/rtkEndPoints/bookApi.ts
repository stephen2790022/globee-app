import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const bookApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // Endpoint pour récupérer tous les livres
    fetchBooks: builder.query({
      query: () => "/mock/book/all",
    }),
  }),
});

export const { useFetchBooksQuery } = bookApi;
