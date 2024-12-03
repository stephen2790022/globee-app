import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "./bookSlice";
import bookmarksReducer from "./bookmarksSlice";

export const store = configureStore({
  reducer: {
    [bookSlice.reducerPath]: bookSlice.reducer,
    bookmarks: bookmarksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
