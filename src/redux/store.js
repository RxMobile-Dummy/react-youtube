import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const initialState = {
        name: '',
        age: '',
}

const reducer = (initialState) => initialState

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;   