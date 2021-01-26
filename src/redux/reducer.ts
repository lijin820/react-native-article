import { combineReducers, Reducer } from 'redux';

import articleReducer from './reducer/article';

import { RootState } from './types';

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  articleState: articleReducer,
});

export default rootReducer;
