import reducer from "./store/reducer";

function createStore(reducer) {
    // just declared (without value), not defined
    let state;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action){
        // call the reducer to get the new state
        state = reducer(state, action);
        // Notify the subscribers
        for (let i = 0; i < listeners.length; i++)
            listeners[i]();
    }

    // create a function inside a function to get the value of the variable
    // btw a function inside a function that returns will be a mthod of the outer function
    function getState() {
        return state
    }

    return {
        subscribe,
        dispatch,
        // return the function with the value
        // the value will be private and not accessible from the outside
        getState
    }
}

// pass the reducer function
export default createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);