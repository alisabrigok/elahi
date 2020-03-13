import { takeLatest, put } from "redux-saga/effects";
import {
  loadLastOpenedNotes,
  lastOpenedNotesLoaded,
  lastOpenedNotesLoadingError,
} from "./slice";
import axios from "axios";

export function* loadLastOpenedNotesSaga() {
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
    yield put(lastOpenedNotesLoaded(normalized));
  } catch (error) {
    yield put(lastOpenedNotesLoadingError());
  }
}

export default function* root() {
  yield takeLatest(loadLastOpenedNotes.type, loadLastOpenedNotesSaga);
}
