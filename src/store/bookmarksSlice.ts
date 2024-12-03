import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookmarkState {
  bookmarks: string[];
}

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<string>) => {
      if (!state.bookmarks.includes(action.payload)) {
        state.bookmarks.push(action.payload);
      }
    },
    removeBookmark: (state, action: PayloadAction<string>) => {
      state.bookmarks = state.bookmarks.filter((id) => id !== action.payload);
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
