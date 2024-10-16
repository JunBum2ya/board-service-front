import { configureStore, Tuple } from '@reduxjs/toolkit';
import loading from './features/loading';
import createSagaMiddleware from 'redux-saga';
import { all } from 'axios';
import authentication, { authSaga } from './features/authentication';

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([authSaga()]);
}

const store = configureStore({
  reducer: {
    authentication: authentication,
    loading: loading
  },
  middleware: () => new Tuple(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;