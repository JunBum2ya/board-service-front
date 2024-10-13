import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';

export interface AuthFormState {
  join: {
    username: string,
    password: string,
    passwordConfirm: string,
    email: string,
    nickname: string
  },
  login: {
    username: string,
    password: string,
  }
}

const initialState: AuthFormState = {
  join: {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    nickname: ''
  },
  login: {
    username: '',
    password: ''
  }
};

type ChangeFieldAction = {
  type: string
  key: string;
  value: string;
};

const AuthFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    changeField: (state: AuthFormState, {
      payload: {
        type,
        key,
        value
      }
    }: PayloadAction<ChangeFieldAction>) => produce(state, draft => {
      if (type === 'join') {
        if (key === 'username' || key === 'password' || key === 'passwordConfirm' || key === 'nickname' || key === 'email') {
          draft.join[key] = value;
        }
      } else {
        if (key === 'username' || key === 'password') {
          draft.login[key] = value;
        }
      }
    }),
    initializeForm: (state, { payload }: PayloadAction<'login' | 'join'>) => ({
      ...state,
      [payload]: initialState[payload]
    })
  }
});

export const { changeField, initializeForm } = AuthFormSlice.actions;
export default AuthFormSlice.reducer;