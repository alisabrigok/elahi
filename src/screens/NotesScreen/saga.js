import { takeLatest, put } from "redux-saga/effects";
import { loadNotes, notesLoaded, notesLoadingError } from "./slice";
import axios from "axios";

export function* loadNotesSaga() {
  try {
    const { data } = yield axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const normalized = [
      {
        from: "D'Artagnan Ow Yea!",
        when: "3:11 PM",
        message: data.title,
      },
    ];
    yield put(notesLoaded(normalized));
  } catch (error) {
    yield put(notesLoadingError());
  }
}

export default function* root() {
  yield takeLatest(loadNotes.type, loadNotesSaga);
}
