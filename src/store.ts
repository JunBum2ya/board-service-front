import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer from './features/AuthenticationReducer';
import AuthFormReducer from './features/AuthFormReducer';

const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    authForm: AuthFormReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;