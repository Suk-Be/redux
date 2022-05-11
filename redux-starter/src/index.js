import configureStore from './store/configureStore';
import { loadBugs, addBug, resolveBug, assignBugToUser } from './store/bugs';

const store = configureStore();

// UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(1, 4), 2000));
