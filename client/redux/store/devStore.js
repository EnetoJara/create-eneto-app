import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';

function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [sagaMiddleware, logger];

	return {
		...createStore(
			rootReducer,
			initialState,
			composeWithDevTools(applyMiddleware(...middleware)),
		),
		runSaga: sagaMiddleware.run,
	};
}
export { configureStore };
