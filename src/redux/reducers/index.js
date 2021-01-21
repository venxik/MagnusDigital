import {combineReducers} from 'redux';
import readingListReducers from './readingListReducers';
import getNewsDataReducers from "./getNewsDataReducers";

const RootReducers  = combineReducers({
  reading_list: readingListReducers,
  news_data: getNewsDataReducers,
})
export default RootReducers
