import { all } from 'redux-saga/effects';
import { articleSaga } from './article';

export default function* rootSaga() {
  yield all([articleSaga()]);
}
