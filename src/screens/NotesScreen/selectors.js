import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { scope } from "./messages";

const selectNotesState = state => state[scope] || initialState;

const selectNotes = createSelector(
  [selectNotesState],
  notesState => notesState.notes,
);

const selectNotesLoading = createSelector(
  [selectNotesState],
  notesState => notesState.loading,
);

export { selectNotes, selectNotesLoading, selectNotesState };
