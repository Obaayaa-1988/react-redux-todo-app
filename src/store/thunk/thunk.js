//a thunk is a function that returns another fashion
//thunk accepts dispatch and getState
//redux thunk is also a middleware used to perform asyncronous action
//thunk takes the responsibility of actions they dispatch thunks
import axios from "axios"
import { FETCH_TODOS, getTodos, loadingTodosInProgress, todosFailure, todosSuccessful } from "../actions/action"
import { createTodo } from "../actions/action"
import { deleteTodo } from "../actions/action"
import { statusTodo } from "../actions/action"

export const testingThunk = () => ()=> {

}

//third party api
// export const fetchTodos = () => async (dispatch, getState) => {
//     try {

//         dispatch(loadingTodosInProgress())

//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");

//         //dispatch(getTodos(response.data))

//         dispatch(todosSuccessful(response.data))
        
//     } catch (error) {
//         console.log(error)

//         dispatch(todosFailure())
        
//     }
// }


//connecting to the backend api fetching all todos from the api backend/ todolist component
export const fetchTodos = () => async (dispatch, getState) => {
    try {

        // dispatch(loadingTodosInProgress())

        const response = await axios.get("http://localhost:9080/all-todos");

        dispatch(getTodos(response.data))//response.data are the arguement from the action creators(payload)
       //dispatching the gettodos from the actioncreator and it goes to the reducer to grab the state there
    //    console.log(response.data)
        // dispatch(todosSuccessful(response.data))
        console.log('this is the state',getState())
        
    } catch (error) {
        console.log(error)

        // dispatch(todosFailure())
        
    }
}

//adding a todo logic at todoform connecting to backend api

export const addTodo =  (text) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:9080/create-todos", {
            text
        });

        const { data } = response

        dispatch(createTodo(data))
        
    } catch (error) {

        console.log(error)
        
    }

}



//deleting  a todo logic at listItem connecting to backend api

export const clearTodo =  (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`http://localhost:9080/delete-todo/${id}`, {
            
        });

        const { data } = response

        dispatch(deleteTodo(data))
        
    } catch (error) {

        console.log(error)
        
    }

}


//deleting  a todo logic at listItem connecting to backend api

export const updateTodo =  (id) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:9080/update-todo/${id}`, {
            
        });

        const { data } = response

        dispatch(statusTodo(data))
        
    } catch (error) {

        console.log(error)
        
    }

}