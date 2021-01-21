import { ADD_READING_LIST, DELETE_READING_LIST } from "./constants";

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  readingList: [],
};

const readingListReducers = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case ADD_READING_LIST:
      console.log(state.readingList)
      return {
        ...state, readingList: state.readingList.concat(action.payload)
      }
    case DELETE_READING_LIST:
      return {
        ...state,
        readingList: state.readingList.filter((item, index) => item.book_mark_id !== action.book_mark_id)
      }
    default:
      return state
  }
}
export default readingListReducers
