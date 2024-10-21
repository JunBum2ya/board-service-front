import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import * as authApi from '../api/Authentication';
import { Authentication, AuthenticationResponse, JoinRequest, LoginRequest } from '../types/auth/authentication';
import { createApi, EndpointBuilder, fetchBaseQuery } from '@reduxjs/toolkit/query';
import CommonResponse from '../types/CommonResponse';

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

export const join = createAsyncThunk(`authentication/JOIN`,
  async (request: JoinRequest) => authApi.join(request));
export const login = createAsyncThunk(`authentication/LOGIN`,
  async (request: LoginRequest) => authApi.login(request));

const authenticationSlice = createSlice({
  name: `authentication`,
  initialState,
  reducers: {
    changeField: (state, action: PayloadAction<ChangeFieldAction>) => {
      const { form, key, value } = action.payload;
      if (form === 'login') {
        if (key === 'username' || key === 'password') {
          state.form.login[key] = value;
        }
      } else {
        state.form.join[key] = value;
      }
    },
    initializeForm: (state, action: PayloadAction<'login' | 'join'>) => {
      if (action.payload === 'login') {
        state.form.login = initialState.form.login;
      } else {
        state.form.join = initialState.form.join;
      }
    },
    setAuthentication: (state, action: PayloadAction<Authentication>) => {
      state.authentication = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(join.fulfilled, (state, action) => {
      if (action.payload) {
        state.authentication = action.payload;
      } else {
        state.error = '회원가입 에러';
      }
    }).addCase(login.fulfilled, (state, action) => {
      if (action.payload) {
        state.authentication = action.payload;
      } else {
        state.error = '로그인 에러';
      }
    });
  }
});

export const { changeField, initializeForm, setAuthentication } = authenticationSlice.actions;
export default authenticationSlice.reducer;