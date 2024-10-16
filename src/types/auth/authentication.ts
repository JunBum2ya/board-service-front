export type LoginRequest = {
  username: string;
  password: string;
};

export type JoinRequest = {
  username: string;
  password: string;
  email: string;
  nickname: string;
};

export type AuthenticationResponse = {
  username: string;
  accessToken: string;
  issuedAt: string;
};

export interface Authentication {
  username: string;
  accessToken: string;
  issuedAt: string;
}

export interface AuthenticationState {
  auth: Authentication | null;
  error: string | null;
}