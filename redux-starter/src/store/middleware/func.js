// store is a different object than the store object from configureStore
// it holds methods for handling objects that get passed to the reducer by the action method
// S (dispatch to pass the payload thi own store), N, A

// take awy all that logic is implemented in redux-thunk which is part of redux-toolkit!
// take a look at sinmpler implementation toast.js and configureStore.js (getDefaultMiddleware)
const func =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function')
      // call action
      action(dispatch, getState);
    // call reducer
    else next(action);
  };

export default func;
