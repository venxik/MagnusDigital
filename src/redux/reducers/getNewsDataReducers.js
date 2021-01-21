import { GET_NEWS_DATA, FAILED_GET_NEWS_DATA, SUCCESS_GET_NEWS_DATA } from "./constants";

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  newsData: [],
  isFetching: false,
  error: false
};

const getNewsDataReducers = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case GET_NEWS_DATA:
      return {...state, isFetching: true}
    case SUCCESS_GET_NEWS_DATA:
      return {...state, isFetching: false, newsData: action.data.articles}
    case FAILED_GET_NEWS_DATA:
      return {...state, isFetching: false, error: true}
    default:
      return state
  }
}
export default getNewsDataReducers
