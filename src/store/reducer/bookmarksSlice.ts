import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "../rtkEndPoints/bookApi.types";

interface BookmarkState {
  bookmarks: Book[];
}

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<Book>) => {
      if (!state.bookmarks.includes(action.payload)) {
        state.bookmarks.push(action.payload);
      }
    },
    removeBookmark: (state, action: PayloadAction<Book>) => {
      state.bookmarks = state.bookmarks.filter((id) => id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
