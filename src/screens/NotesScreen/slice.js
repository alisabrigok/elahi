import { createSlice } from "@reduxjs/toolkit";

import { scope as name } from "./messages";

export const initialState = {
  notes: [],
  loading: false,
  error: false,
};

const notesSlice = createSlice({
  name,
  initialState,
  reducers: {
    loadNotes(state) {
      state.loading = true;
      state.error = false;
      state.notes = [];
    },
    notesLoaded(state, action) {
      state.notes = action.payload;
      state.loading = false;
    },
    notesLoadingError(state) {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { actions, reducer } = notesSlice;

export const { loadNotes, notesLoaded, notesLoadingError } = actions;

export default reducer;
