import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Utilise localStorage par défaut
import { bookApi } from "./rtkEndPoints/bookApi";
import bookmarksReducer from "./reducer/bookmarksSlice";

const persistConfig = {
  key: "bookmarks",
  storage,
};

const persistedBookmarksReducer = persistReducer(
  persistConfig,
  bookmarksReducer,
);

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    bookmarks: persistedBookmarksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(bookApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
