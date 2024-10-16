import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer, { authSaga } from './features/AuthenticationReducer';
import AuthFormReducer from './features/AuthFormReducer';
import loading from './features/loading';
import createSagaMiddleware from 'redux-saga';
import { all } from 'axios';

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([authSaga()]);
}

const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    authForm: AuthFormReducer,
    loading: loading
  }
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;