import { handleActions } from "redux-actions";
import { toggleSideBar, toggleSideBarSuccess } from "../actions/appActions";
import { appLoading } from "../actions/appActions";

const reducer = handleActions(
	new Map([
		[
			toggleSideBar,
			(state, action) => ({ ...state, openSideBar: action.payload, })
		],
		[appLoading, (state, action) => ({ ...state, loading: action.payload, })],
		[toggleSideBarSuccess, (state) => ({ ...state, })]
	]),
	{
		loading: false,
		openSideBar: false,
	},
);

export default reducer;
