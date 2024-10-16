import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from '../features/loading';
import { AxiosResponse } from 'axios';
import CommonResponse from '../types/CommonResponse';

interface RequestSagaAction<T> {
  type: string,
  payload: T
}

export const createRequestActionTypes = (type: string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

const createRequestSaga = <T, R>(type: string, request: (payload: T) => Promise<CommonResponse<R>>) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: RequestSagaAction<T>) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response: AxiosResponse<R> = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      });
    } finally {
      yield put(finishLoading(type));
    }
  };
};

export default createRequestSaga;