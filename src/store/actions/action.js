//so we can make changes to it anytime
export const CREATE_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETED_TODO';
export const COMPLETE_TODO = 'COMPLETED_TODO'

//exporting createtodo
/* action creators return an object containing type and payload, they are functions they contain an object */
//action describes something that will happen to our application in this the words(text) input into the input fiels by our app users
//returning an object in a function
//actions are dispatch to the reducer

export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload:{ text, isCompleted: false }

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
export const FETCH_TODOS = 'FETCH_TODOS'

export const getTodos = (data) => ({
    type: FETCH_TODOS,
    payload: { data }
});

//payload{text} is returning an object es6 syntax for single items in an object