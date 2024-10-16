import { createAction, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as authApi from '../api/Authentication';
import createRequestSaga, { createRequestActionTypes } from '../api/createRequestSaga';
import { JoinRequest, LoginRequest } from '../types/auth/authentication';
import { takeLatest } from 'redux-saga/effects';
import { produce } from 'immer';

const CHANGE_FIELD = `auth/CHANGE_FIELD` as const;
const INITIALIZE_FORM = `auth/INITIALIZE_FORM` as const;
const [JOIN, JOIN_SUCCESS, JOIN_FAILURE] = createRequestActionTypes(`auth/JOIN`);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(`auth/LOGIN`);

type AuthenticationState = {
  form: AuthFormState;
  authentication: Authentication | null;
  error: string | null;
};

type AuthFormState = {
  login: LoginFormState;
  join: JoinFormState;
};

type LoginFormState = {
  username: string;
  password: string;
};

type JoinFormState = {
  username: string;
  password: string;
  passwordConfirm: string;
  email: string;
  nickname: string;
};

type Authentication = {
  username: string;
  accessToken: string;
  issuedDate: string;
};

const initialState: AuthenticationState = {
  form: {
    login: {
      username: '',
      password: ''
    },
    join: {
      username: '',
      password: '',
      passwordConfirm: '',
      email: '',
      nickname: ''
    }
  },
  authentication: null,
  error: null
};

type ChangeFieldAction = {
  form: 'login' | 'join',
  key: 'username' | 'password' | 'passwordConfirm' | 'email' | 'nickname',
  value: string
}

export const changeField = createAction<ChangeFieldAction>(CHANGE_FIELD);
export const initializeForm = createAction<'login' | 'join'>(INITIALIZE_FORM);

export const join = createAction<JoinRequest>(JOIN);
export const joinSuccess = createAction<Authentication>(JOIN_SUCCESS);
export const joinFailure = createAction<string>(JOIN_FAILURE);
export const login = createAction<LoginRequest>(LOGIN);
export const loginSuccess = createAction<Authentication>(LOGIN_SUCCESS);
export const loginFailure = createAction<string>(LOGIN_FAILURE);

const joinSaga = createRequestSaga(JOIN, authApi.join);
const loginSaga = createRequestSaga(LOGIN, authApi.login);

export function* authSaga() {
  yield takeLatest(JOIN, joinSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const authenticationReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeField, (state, action) => produce(state, draft => {
    const { form, key, value } = action.payload;
    if (form === 'login') {
      if (key === 'username' || key === 'password') {
        draft.form.login[key] = value;
      }
    } else {
      draft.form.join[key] = value;
    }
  })).addCase(initializeForm, (state, { payload }) => produce(state, draft => {
    if (payload === 'login') {
      draft.form.login = initialState.form.login;
    } else {
      draft.form.join = initialState.form.join;
    }
  })).addCase(joinSuccess, (state, action) => ({
    ...state,
    authentication: action.payload,
    error: null
  })).addCase(joinFailure, (state, action) => ({
    ...state,
    authentication: null,
    error: action.payload
  })).addCase(loginSuccess, (state, action) => ({
    ...state,
    authentication: action.payload,
    error: null
  })).addCase(loginFailure, (state, action) => ({
    ...state,
    authentication: null,
    error: action.payload
  }));
});

export default authenticationReducer;