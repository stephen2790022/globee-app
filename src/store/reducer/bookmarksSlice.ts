import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../rtkEndPoints/bookApi.types";

export interface BookmarkState {
  bookmarks: Book[];
}

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<Book | null>) => {
      if (
        action.payload &&
        !state.bookmarks.some(
          (book) => book.id_book === action.payload?.id_book,
        )
      ) {
        state.bookmarks.push(action.payload);
      }
    },
    removeBookmark: (state, action: PayloadAction<Book | null>) => {
      if (action.payload) {
        state.bookmarks = state.bookmarks.filter(
          (book) => book.id_book !== action.payload?.id_book,
        );
      }
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
