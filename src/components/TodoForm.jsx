import React from "react";
import { useState } from "react";
import FormStyle from './TodoForm.module.css';
import { connect } from "react-redux";
import { createTodo } from "../store/actions/action";
import { addTodo } from "../store/thunk/thunk";




const TodoForm = ({ Alltodos, plusTodo }) => {


    const [inputValue, setInputValue] = useState("")
    
    console.log(Alltodos)


    return (
        <div className={ FormStyle.todo_form}>
            <input type="text" className={FormStyle.todo_input} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button className={FormStyle.todo_btn} onClick={() => { plusTodo(inputValue); setInputValue('') }}>Add Task</button>
        </div>
    )
}

//mapstateprop it will go to the store and fetch current state we have
//anytime a todo is pushed it will come here(our state is an array)
const mapStateToProps = (state) => ({
    Alltodos: state.todos


})

//it gives the opportunity to dispatch an action to the reducer
//an the action we want to dispatch is a text
const mapDispatchToProps = (dispatch) => ({
    plusTodo: text => dispatch(addTodo(text))


})

export default connect(mapStateToProps, mapDispatchToProps) (TodoForm);
//after setting our store we have to connect the store to our components so we use the connect
// connect takes two argruements, it accepts what will fetch our data