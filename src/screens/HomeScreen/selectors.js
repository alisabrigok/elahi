import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { scope } from "./messages";

const selectHome = state => state[scope] || initialState;

const selectLastOpenedNotes = createSelector(
  [selectHome],
  homeState => homeState.lastOpenedNotes,
);

const selectLastOpenedNotesLoading = createSelector(
  [selectHome],
  homeState => homeState.loading,
);

export { selectLastOpenedNotes, selectLastOpenedNotesLoading, selectHome };
