export const CREATE_TODO = 'ADD_TODO';
//exporting createtodo
/* action creators return an object containing type and payload */
//returning an object in a function
export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload:{ text, isCompleted: false }

})

//payload{text} is returning an object es6 synatx for single items in an object