import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer from './features/AuthenticationReducer';
import AuthFormReducer from './features/AuthFormReducer';
import loading from './features/loading';

const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    authForm: AuthFormReducer,
    loading: loading
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;