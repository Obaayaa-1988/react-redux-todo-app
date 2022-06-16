//so we can make changes to it anytime
export const CREATE_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETED_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'

//exporting createtodo
/* action creators return an object containing type and payload, they are functions they contain an object */
//action describes something that will happen to our application in this the words(text) input into the input fiels by our app users
//returning an object in a function
//actions are dispatch to the reducer

// export const createTodo = (text) => ({
//     type: CREATE_TODO,
//     payload:{ text, isCompleted: false }

// })

//this is an action creator
////thunk asyncronous request for adding  a new todo to the database

export const createTodo = (todo) => ({
    type: CREATE_TODO,
    payload:{ todo}

})


// export const deleteTodo = (text) => ({
//     type: DELETE_TODO,
//     payload:{ text }

// })

//thunk asyncronous request for deleting a todo from the database
export const deleteTodo = ( id ) => ({
    type: DELETE_TODO,
    payload:{ id }

})


//thunk ansyncronous for updating the todo from pending to done in the database

export const statusTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id }
})





//action for thunk asyncronous request for fetching all todos from the database action creator for it
//using useeffect for
export const LOAD_TODOS = 'LOAD_TODOS'

export const getTodos = (data) => ({
    type: LOAD_TODOS,
    payload: { data }
});



//todos loading only initial loading 
export const TODOS_LOADING = "TODOS_LOADING"
export const loadingTodosInProgress = () => ({
    type: TODOS_LOADING
})


//todos success when loading

export const TODOS_SUCCESS ="TODOS_SUCCESS"

export const todosSuccessful = () => ({
    type: TODOS_SUCCESS,
    
})


//todos failure

export const TODOS_FAILURE = "TODOS_FAILURE"

export const todosFailure = () => ({
    type: TODOS_FAILURE
})




//payload{text} is returning an object es6 syntax for single items in an object