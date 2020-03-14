import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./slice";
import { scope } from "./messages";

const selectHomeState = state => state[scope] || initialState;

const selectLastOpenedNotes = createSelector(
  [selectHomeState],
  homeState => homeState.lastOpenedNotes,
);

const selectLastOpenedNotesLoading = createSelector(
  [selectHomeState],
  homeState => homeState.loading,
);

export { selectLastOpenedNotes, selectLastOpenedNotesLoading, selectHomeState };
