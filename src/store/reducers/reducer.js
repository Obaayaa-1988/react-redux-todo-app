import { COMPLETE_TODO, CREATE_TODO } from './../actions/action'
import { DELETE_TODO } from './../actions/action';
import { LOAD_TODOS, TODOS_LOADING, TODOS_SUCCESS, TODOS_FAILURE } from './../actions/action';

/**
 * state //this is overall store, user define
 * action //contains the type and payload or data
 * //reducer gives details of what the state needs to perform
 * 
 */

export const todos = (state = [], action) => {

    switch (action.type) {

           
        case CREATE_TODO: {

            return [...state, action.payload.todo]
        };


        // case CREATE_TODO: {
        //     const newTodo = {
        //         text: action.payload.text,
        //         isCompleted: action.payload.isCompleted
        //     };
        //     return [...state, newTodo]
        // };


        case DELETE_TODO: {
            const clearTodo = state.filter((list) => list.text !== action.payload.text)
            return [...clearTodo]
        }

        // case COMPLETE_TODO: {
        //     if(state.isCompleted !== action.payload.isCompleted){
        //         return state
        //     } 
        // }

        case COMPLETE_TODO: {
            return state.map(task => {
                if (task.text === action.payload.text) {
                    return { ...task, isCompleted: !task.isCompleted }
                }

                return task;
            })
        }

        case LOAD_TODOS: {
            console.log(action)
            return action.payload.data
        }


        default:
            return state;
    }
}


//second reducer for thunk connection

export const loading = (isLoading = false, action) => {
    switch (action.type) {
        case TODOS_LOADING: {
            return isLoading = true;

        }

        case TODOS_SUCCESS: {
            return {
                isLoading: false,
                data: action.payload.todos
            }
        }

        case TODOS_FAILURE: {

        }


        default: 
        return isLoading
    }
    
   
}













//we will need the actions inside the reducers