import { takeLatest, put } from "redux-saga/effects";
import { getLastOpenedNotes } from "./slice";
import axios from "axios";

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

export function* getLastOpenedNotesSaga() {
  try {
    const { data } = yield axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const normalized = [
      {
        from: "D'Artagnan",
        when: "3:11 PM",
        message: data.title,
      },
    ];
    console.log(normalized);
    // yield put(getLastOpenedNotes(normalized));
  } catch (error) {}
}

export default function* root() {
  yield takeLatest(getLastOpenedNotes.type, getLastOpenedNotesSaga);
}
