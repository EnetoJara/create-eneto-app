import { takeEvery, fork } from "redux-saga/effects";
import { TOGGLE_SIDEBAR_REQUEST } from "../actionTypes/appTypes";
import { workerToggleSideBar } from "./worker";

function* watcherToggleSideBar () {
	yield takeEvery(TOGGLE_SIDEBAR_REQUEST, workerToggleSideBar);
}
export default [fork(watcherToggleSideBar)];
