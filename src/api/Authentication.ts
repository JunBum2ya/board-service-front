import client from './client';
import CommonResponse from '../types/CommonResponse';
import { AuthenticationResponse, JoinRequest, LoginRequest } from '../types/auth/authentication';
import { AxiosResponse } from 'axios';

export const login = async (props: LoginRequest) => {
  const promise = client.post<LoginRequest, AxiosResponse<CommonResponse<AuthenticationResponse>>>(`/api/members/login`, props);
  return promise.then(response => {
    if (response.status === 200 && response.data) {
      const responseData = response.data;
      if (responseData.code === '200' && responseData.data) {
        return responseData.data;
      }
      throw new Error(responseData.message);
    }
    throw new Error(response.statusText);
  });
};

export const join = async (props: JoinRequest) => {
  const promise = client.post<JoinRequest, AxiosResponse<CommonResponse<AuthenticationResponse>>>(`/api/members/join`, props);
  return promise.then(response => {
    if (response.status === 200 && response.data) {
      const responseData = response.data;
      if (responseData.code === '200' && responseData.data) {
        return responseData.data;
      }
    }
    throw new Error(response.statusText);
  });
};


