import { createSlice } from "@reduxjs/toolkit";
import { scope as name } from "./messages";

export const initialState = {
  lastOpenedNotes: [],
  loading: false,
  error: false,
};

const homeSlice = createSlice({
  name,
  initialState,
  reducers: {
    loadLastOpenedNotes(state) {
      state.loading = true;
      state.error = false;
      state.lastOpenedNotes = [];
    },
    lastOpenedNotesLoaded(state, action) {
      state.lastOpenedNotes = action.payload;
      state.loading = false;
    },
    lastOpenedNotesLoadingError(state) {
      state.error = true;
      state.loading = false;
    },
  },
});

export const { actions, reducer } = homeSlice;

export const {
  loadLastOpenedNotes,
  lastOpenedNotesLoaded,
  lastOpenedNotesLoadingError,
} = actions;

export default reducer;
