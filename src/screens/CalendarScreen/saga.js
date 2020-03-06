import { takeEvery, put } from "redux-saga/effects";
import { getCalendar } from "./slice";

export function* getCalendarSaga() {
  try {
    yield put(getCalendar({}));
  } catch (error) {}
}

export default function* root() {
  const GET_CALENDAR = getCalendar.toString();
  yield takeEvery(GET_CALENDAR, getCalendarSaga);
}
