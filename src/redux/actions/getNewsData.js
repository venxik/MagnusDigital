import { GET_NEWS_DATA, FAILED_GET_NEWS_DATA, SUCCESS_GET_NEWS_DATA } from "../reducers/constants";
import { key_news_api, fetch_link } from "../../config/config_key";

const fetchNewsData = () => {
  return async (dispatch) => {
      dispatch(getNewsData())
      console.log("get data")
      try {
      const res = await fetch(`${fetch_link}/top-headlines?country=id&apiKey=${key_news_api}`,{
        method: 'GET',
      });
      const json = await res.json();
      return (dispatch(successGetNewsData(json)));
    } catch (err) {
      return dispatch(failedGetNewsData(err));
    }
  }
}

const getNewsData = () => {
  return {
    type: GET_NEWS_DATA
  }
}
const successGetNewsData = (data) => {
  return {
    type: SUCCESS_GET_NEWS_DATA,
    data
  }
}
const failedGetNewsData = () => {
  return {
    type: FAILED_GET_NEWS_DATA,
  }
}

export {
  fetchNewsData,
  getNewsData,
  successGetNewsData,
  failedGetNewsData
}
