import { AuthenticationResponse, JoinRequest, LoginRequest } from '../types/auth/authentication';
import { postServerApi } from './requestApi';

export const login = async (props: LoginRequest) => {
  const promise = postServerApi<LoginRequest, AuthenticationResponse>(`/api/members/login`, props);
  return promise.then(response => response);
};

export const join = async (props: JoinRequest) => {
  const promise = postServerApi<JoinRequest, AuthenticationResponse>(`/api/members/join`, props);
  return promise.then(response => response);
};


