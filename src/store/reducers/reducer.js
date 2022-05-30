import { COMPLETE_TODO, CREATE_TODO } from './../actions/action'
import { DELETE_TODO } from './../actions/action';

/**
 * state //this is overall store, user define
 * action //contains the type and payload or data
 */

export const todos = (state = [], action) => {

    switch (action.type) {
        case CREATE_TODO: {
            const newTodo = {
                text: action.payload.text,
                isCompleted: action.payload.isCompleted
            };
            return [...state, newTodo]
        };

        case DELETE_TODO: {
            const clearTodo = state.filter((list) => list.text !== action.payload.text)
            return[...clearTodo]
        }

        // case COMPLETE_TODO: {
        //     if(state.isCompleted !== action.payload.isCompleted){
        //         return state
        //     } 
        // }

        case COMPLETE_TODO:{
            return state.map(task => {
                if(task.text === action.payload.text){
                    return { ...task, isCompleted: !task.isCompleted }
                }

                return task;
            })
        }
            
            
        default:
            return state;
    }
}














//we will need the actions inside the reducers