import { put, call, takeEvery, all } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import {
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_FAILURE,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
} from '../constants';
import Api from '../api';

const apiInstance = new Api();

function* getBannersFn(): SagaIterator {
  try {
    const response = yield call(apiInstance.getBanners);
    if (response && response.data && response.status === 200) {
      yield put({ type: GET_BANNERS_SUCCESS, payload: response.data });
    } else {
      yield put({ type: GET_BANNERS_FAILURE });
    }
  } catch (err) {
    yield put({ type: GET_BANNERS_FAILURE });
  }
}

function* getPostsFn(): SagaIterator {
  try {
    const response = yield call(apiInstance.getPosts);
    console.log('getPostsFn', response);
    if (response && response.data && response.status === 200) {
      yield put({ type: GET_ARTICLES_SUCCESS, payload: response.data });
    } else {
      yield put({ type: GET_ARTICLES_FAILURE });
    }
  } catch (err) {
    console.log('error', err);
    yield put({ type: GET_ARTICLES_FAILURE });
  }
}

export function* articleSaga(): SagaIterator {
  yield all([
    takeEvery(GET_BANNERS_REQUEST, getBannersFn),
    takeEvery(GET_ARTICLES_REQUEST, getPostsFn),
  ]);
}
