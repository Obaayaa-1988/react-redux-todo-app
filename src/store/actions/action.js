//so we can make changes to it anytime
export const CREATE_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETED_TODO';

//exporting createtodo
/* action creators return an object containing type and payload */
//action describes something that will happen to our application in this the words(text) input into the input fiels by our app users
//returning an object in a function

export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload:{ text, isCompleted: false }

})

export const deleteTodo = (text) => ({
    type: CREATE_TODO,
    payload:{ text, isCompleted: false }

})

//payload{text} is returning an object es6 syntax for single items in an object