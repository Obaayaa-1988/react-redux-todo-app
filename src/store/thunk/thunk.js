//a thunk is a function that returns another fashion
import axios from "axios"
import { FETCH_TODOS, getTodos } from "../actions/action"

export const testingThunk = () => ()=> {

}


export const fetchTodos = () => async (dispatch, getState) => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");

        dispatch(getTodos(response.data))
        
    } catch (error) {
        console.log(error)
        
    }
}