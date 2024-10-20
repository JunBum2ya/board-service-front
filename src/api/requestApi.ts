import client from './client';
import axios, { AxiosResponse } from 'axios';
import CommonResponse from '../types/CommonResponse';

export async function postApi<T, R>(url: string, request: T): Promise<R> {
  return client.post<T, AxiosResponse<R>>(url, request).then(response => {
    return response.data;
  }).catch(error => {
    if(axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error(error);
  });
}

export async function postServerApi<T, R>(url: string, request: T): Promise<R> {
  return postApi<T, CommonResponse<R>>(url, request).then(response => {
    if (response.code === '200' && response.data) {
      return response.data;
    } else {
      throw new Error(response.message);
    }
  });
}