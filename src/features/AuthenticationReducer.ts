import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthenticationState {
  username: string;
}

const initialState: AuthenticationState = {
  username: ''
};

const AuthenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthenticationState>) => {
      state.username = payload.username;
    }
  }
});

export const { login } = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;