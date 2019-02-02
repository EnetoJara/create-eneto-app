import { createAction } from 'redux-actions';
import {
	TOGGLE_SIDEBAR_REQUEST,
	APP_LOADING,
	TOGGLE_SIDEBAR_SUCCESS,
} from '../actionTypes/appTypes';

export const toggleSideBar = createAction(TOGGLE_SIDEBAR_REQUEST);
export const toggleSideBarSuccess = createAction(TOGGLE_SIDEBAR_SUCCESS);
export const appLoading = createAction(APP_LOADING);
