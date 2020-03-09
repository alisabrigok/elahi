import { takeEvery, put } from "redux-saga/effects";
import { getNotes } from "./slice";

export function* getNotesSaga() {
  try {
    yield put(getNotes({}));
  } catch (error) {}
}

export default function* root() {
  const GET_NOTES = getNotes.toString();
  yield takeEvery(GET_NOTES, getNotesSaga);
}
