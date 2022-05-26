import React from "react";
import { useState } from "react";
import FormStyle from './TodoForm.module.css';
import { connect } from "react-redux";
import { createTodo } from "../store/actions/action";



const TodoForm = ({ Alltodos, addTodo }) => {


    const [inputValue, setInputValue] = useState("")
    
    console.log(Alltodos)


    return (
        <div className={ FormStyle.todo_form}>
            <input type="text" className={FormStyle.todo_input} onChange={e => setInputValue(e.target.value)}/>
            <button className={FormStyle.todo_btn} onClick={() => addTodo(inputValue)}>Add Task</button>
        </div>
    )
}
//mapstateprop it will go to the store and fetch current state we have
//anytime a todo is pushed it will come here(our state is an array)
const mapStateToProps = (state) => ({
    Alltodos: state.todos


})

//it gives the opportunity to dispatch an action to the reducer
const mapDispatchToProps = (dispatch) => ({
    addTodo: text => dispatch(createTodo(text))


})

export default connect(mapStateToProps, mapDispatchToProps) (TodoForm);
//after setting our store we have to connect the store to our components so we use the connect
// connect takes two argruements, it accepts what will fetch our data