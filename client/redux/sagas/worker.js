import { put } from "redux-saga/effects";
import { toggleSideBarSuccess } from "../actions/appActions";

function* workerToggleSideBar () {
	yield put(toggleSideBarSuccess());
}

export { workerToggleSideBar };
