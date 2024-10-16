import client from './client';
import CommonResponse from '../types/CommonResponse';
import { AuthenticationResponse, JoinRequest, LoginRequest } from '../types/auth/authentication';

export const login = (props: LoginRequest) =>
  client.post<LoginRequest, CommonResponse<AuthenticationResponse>>(`/api/members/login`, props);

export const join = (props: JoinRequest) =>
  client.post<JoinRequest, CommonResponse<AuthenticationResponse>>(`/api/members/join`, props);


