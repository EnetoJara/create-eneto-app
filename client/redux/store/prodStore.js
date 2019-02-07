import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";

function configureStore (initialState) {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [sagaMiddleware];

	return {
		...createStore(rootReducer, initialState, applyMiddleware(...middleware)),
		runSaga: sagaMiddleware.run,
	};
}

export { configureStore };
