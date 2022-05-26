import { legacy_createStore as createStore, combineReducers } from 'redux';
import { todos } from './reducers/reducer';

/*userReducer, todoReducer, permissionReducer*/ 

const reducers = {
    todos
    
};

const rootReducer = combineReducers(reducers);




export const configureStore = () => createStore(rootReducer)