import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './reducers/reducer';
import { loading } from './reducers/reducer';

/*userReducer, todoReducer, permissionReducer*/
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk)) 

const reducers = {
    todos,
    loading
    
};

const rootReducer = combineReducers(reducers);



export const configureStore = () => createStore(rootReducer, composedEnhancer);

// export const configureStore = () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//the store wait for the reducer to get info for what transformation it wants it to do