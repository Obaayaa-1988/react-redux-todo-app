//so we can make changes to it anytime
export const CREATE_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETED_TODO';
export const COMPLETE_TODO = 'COMPLETED_TODO'

//exporting createtodo
/* action creators return an object containing type and payload, they are functions they contain an object */
//action describes something that will happen to our application in this the words(text) input into the input fiels by our app users
//returning an object in a function
//actions are dispatch to the reducer

export const createTodo = (todo) => ({
    type: CREATE_TODO,
    payload:{ todo }

})

export const deleteTodo = (text) => ({
    type: DELETE_TODO,
    payload:{ text }

})

export const displayTodo = (text) => ({
    type: COMPLETE_TODO,
    payload: {text}
})


//action for thunk asyncronous request 
export const LOAD_TODOS = 'LOAD_TODOS'

export const getTodos = (data) => ({
    type: LOAD_TODOS,
    payload: { data }
});




export const TODOS_LOADING = "TODOS_LOADING"

export const loadingTodosInProgress = () => ({
    type: TODOS_LOADING
})


export const TODOS_SUCCESS ="TODOS_SUCCESS"

export const todosSuccessful = (todos,) => ({
    type: TODOS_SUCCESS,
    payload: { todos }
})




export const TODOS_FAILURE = "TODOS_FAILURE"

export const todosFailure = () => ({
    type: TODOS_FAILURE
})




//payload{text} is returning an object es6 syntax for single items in an object