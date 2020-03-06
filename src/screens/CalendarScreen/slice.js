import { createSlice } from "@reduxjs/toolkit";

import { scope as name } from "./messages";

const calendarSlice = createSlice({
  name,
  initialState: {},
  reducers: {
    getCalendar(state, action) {
      state = action.payload;
    },
  },
});

export const { actions, reducer } = calendarSlice;

export const { getCalendar } = actions;

export default reducer;
