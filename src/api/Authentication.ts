import client from './client';
import CommonResponse from '../types/CommonResponse';

export const login = (props: LoginRequest) =>
  client.post<LoginRequest, CommonResponse<AuthenticationResponse>>(`/api/members/login`, props);

export const join = (props: JoinRequest) =>
  client.post<JoinRequest, CommonResponse<AuthenticationResponse>>(`/api/members/join`, props);

type LoginRequest = {
  username: string;
  password: string;
};

type JoinRequest = {
  username: string;
  password: string;
};

type AuthenticationResponse = {
  username: string;
  accessToken: string;
  issuedAt: Date;
};
