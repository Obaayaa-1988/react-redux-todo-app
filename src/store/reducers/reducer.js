import { TOGGLE_TODO, CREATE_TODO } from './../actions/action'
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
            // console.log("this")
            const remove = state.filter(task => task.id !== action.payload.id)
            console.log("hhhhdhjjj", remove)
            return remove


        }



        // case DELETE_TODO: {
        //     const clearTodo = state.filter((list) => list.bay !== action.payload.bay)
        //     return [...clearTodo]
        // }



        case TOGGLE_TODO: {
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, isCompleted: !task.isCompleted }
                }

                return task;
            })
        }


        //updating a todo status
        // case COMPLETE_TODO: {   
        //  return action.payload.id  
        // }




        case LOAD_TODOS: {
            //console.log(action)
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
            return  true;

        }

        case TODOS_SUCCESS: {
            
                return false;   
        }

        case TODOS_FAILURE: {
            return  false

        }

        default:
            return isLoading
    }


}













//we will need the actions inside the reducers