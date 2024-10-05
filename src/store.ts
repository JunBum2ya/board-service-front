import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer from './features/AuthenticationReducer';

const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;