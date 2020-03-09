import { createSlice } from "@reduxjs/toolkit";

import { scope as name } from "./messages";

const notesSlice = createSlice({
  name,
  initialState: {},
  reducers: {
    getNotes(state, action) {
      state = action.payload;
    },
  },
});

export const { actions, reducer } = notesSlice;

export const { getNotes } = actions;

export default reducer;
