import axios from 'axios';
import * as actions from '../api';

// actionCreator from redux-thunk
const api =
  ({ dispatch }) =>
  next =>
  async action => {
    // skip if it not an api call
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onRequestFailed, onError } =
      action.payload;

    // loading inidcator
    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: 'http://localhost:9001/api',
        url,
        method,
        data,
      });
      // General
      dispatch(actions.apiCallSuccess(response.data));
      // Specific
      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: response.data,
        });
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError)
        dispatch({
          type: onError,
          payload: error.message,
        });

      // bugRequest Failed
      if (onRequestFailed) dispatch({ type: onRequestFailed });
    }
  };

export default api;
