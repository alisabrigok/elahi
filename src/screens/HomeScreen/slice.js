import { createSlice } from "@reduxjs/toolkit";
import { scope as name } from "./messages";

const lastOpenedNotes = [
  {
    from: "D'Artagnan",
    when: "3:11 PM",
    message:
      "Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque",
  },
  {
    from: "Aramis",
    when: "11:46 AM",
    message:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.",
  },
  {
    from: "Athos",
    when: "6:06 AM",
    message:
      "Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.",
  },
];

export const initialState = {
  lastOpenedNotes: [],
};

const homeSlice = createSlice({
  name,
  initialState,
  reducers: {
    getLastOpenedNotes(state, action) {
      console.log("reducer");
      state.lastOpenedNotes = action.payload;
    },
  },
});

export const { actions, reducer } = homeSlice;

export const { getLastOpenedNotes } = actions;

export default reducer;
