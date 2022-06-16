import { TOGGLE_TODO, CREATE_TODO } from './../actions/action'
import { DELETE_TODO } from './../actions/action';
import { LOAD_TODOS, TODOS_LOADING, TODOS_SUCCESS, TODOS_FAILURE } from './../actions/action';

/**
 * state //this is overall store, user define
 * action //contains the type and payload or data
 * //reducer gives details of what the state needs to perform
 * 
 */
//combining the todos reducer and loading reducer as one
export const todos = (state = {data:[], loading: false}, action) => {

    switch (action.type) {

        case CREATE_TODO: {

         return {
            ...state,
            data: [...state.data, action.payload.todo]

          }
             
        };

        case DELETE_TODO: {
            return {
                ...state,
                data: state.data.filter(task => task.id !== action.payload.id)
            }
        }


        case TOGGLE_TODO: {
               return {
                ...state,
             data: state.data.map(task => {
                if (task.id === action.payload.id) {
                    return { ...task, isCompleted: !task.isCompleted }
                }

                return task;
            })
        }
    }

        case LOAD_TODOS: {
           return {
            ...state,
            loading: false,
            data: action.payload.data
            }
             
        }

        case TODOS_LOADING: {
            return {
                ...state,
                loading: true
            }
        }

        case TODOS_SUCCESS: {
            return{
                ...state,
                loading: false
            }
        }

        case TODOS_FAILURE: {
            return{
                ...state,
                loading: false
            }
        }





        // case CREATE_TODO: {
        //     const newTodo = {
        //         text: action.payload.text,
        //         isCompleted: action.payload.isCompleted
        //     };
        //     return [...state, newTodo]
        // };

        // case DELETE_TODO: {
        //     // console.log("this")
        //     const remove = state.filter(task => task.id !== action.payload.id)
        //     //console.log("hhhhdhjjj", remove)
        //     return remove
        // }
        // case DELETE_TODO: {
        //     const clearTodo = state.filter((list) => list.bay !== action.payload.bay)
        //     return [...clearTodo]
        // }
        // case TOGGLE_TODO: {
        //     return state.map(task => {
        //         if (task.id === action.payload.id) {
        //             return { ...task, isCompleted: !task.isCompleted }
        //         }

        //         return task;
        //     })
        // }
        //fetching todos from the sevre
        // case LOAD_TODOS: {
        //     //console.log(action)
        //     return action.payload.data
        // }




       


        default:
            return state;
    }
}


//second reducer for thunk connection this is for when a todo is being fetched from the backend
//

// export const loading = (isLoading = false, action) => {
//     switch (action.type) {
//         case TODOS_LOADING: {
//             return  true;

//         }

//         case TODOS_SUCCESS: {
            
//                 return false;   
//         }

//         case TODOS_FAILURE: {
//             return  false

//         }

//         default:
//             return isLoading
//     }


// }













//we will need the actions inside the reducers