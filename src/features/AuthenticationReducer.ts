import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import createRequestSaga, { createRequestActionTypes } from '../api/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authApi from '../api/Authentication';
import {
  Authentication,
  AuthenticationResponse,
  AuthenticationState,
  JoinRequest,
  LoginRequest
} from '../types/auth/authentication';

const initialState: AuthenticationState = {
  auth: null,
  error: null
};

const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] = createRequestActionTypes('auth/JOIN');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

const join = createAction<any, string>(JOIN, (request: JoinRequest) => ({
  ...request
}));

const login = createAction<any, string>(JOIN, (username: string, password: string) => ({
  username,
  password
}));

const joinSaga = createRequestSaga<JoinRequest, AuthenticationResponse>(JOIN, authApi.join);
const loginSaga = createRequestSaga<LoginRequest, AuthenticationResponse>(LOGIN, authApi.login);

export function* authSaga() {
  yield takeLatest(JOIN, joinSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    join: (state, action: PayloadAction) => ({
      ...state
    }),
    joinSuccess: (state, action: PayloadAction<Authentication>) => ({
      ...state, error: null, auth: action.payload
    }),
    joinFailure: (state, action: PayloadAction<string>) => ({
      ...state, error: action.payload, auth: null
    })
  }
});

export const {} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;