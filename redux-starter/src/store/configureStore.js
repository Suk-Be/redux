// redux toolkit -
// replaces createStore from redux
// replaces devToolsEnhancer from redux-devtools-enhancer
// uses inner.js to write simple mutating coding patterns for immutable data
// uses redux-thunk that allows writing (moderate async like fetch) logic for dispatch methods (e.g. toast.js) and getState methods
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import toast from './middleware/toast';
import api from './middleware/api';

export default function () {
  return configureStore({
    // reducer: reducer -> js shorthand
    reducer,
    // register middleware functions (order of functions matters)
    middleware: [
      // destructure all functionalities into Array (e.g. redux thunk)
      ...getDefaultMiddleware(),
      // pass params to logger
      //logger({ destination: 'console' }),
      toast,
      api,
    ],
  });
}
