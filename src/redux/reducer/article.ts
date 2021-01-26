import {
  GET_BANNERS_REQUEST,
  GET_BANNERS_SUCCESS,
  GET_BANNERS_FAILURE,
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
} from '../constants';
import { ArticleState } from '../types';

const initialState: ArticleState = {
  banners: [],
  fetchedBanner: false,
  articles: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case GET_BANNERS_REQUEST:
      return {
        ...state,
        fetchedBanner: false,
      };
    case GET_BANNERS_SUCCESS:
      return {
        ...state,
        banners: action.payload,
        fetchedBanner: true,
      };
    case GET_BANNERS_FAILURE:
      return {
        ...state,
        fetchedBanner: true,
      };
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
      };
    case GET_ARTICLES_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
