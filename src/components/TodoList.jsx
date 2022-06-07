import React, { useEffect } from "react";
import ListItem from "./ListItem";
import TodoForm from "./TodoForm";
import { connect } from "react-redux";
import { fetchTodos } from "../store/thunk/thunk";
// import  styled  from 'styled-components';

// const Wrapper = styled.div`
// max-width:700px;
// margin: auto;
//<Wrapper></Wrapper>


// `


const TodoList = ({ todos, loadAll }) => {

    useEffect(() => {
        loadAll()

    }, [])

    return (
        <div className="">
            <TodoForm />

            { todos.map((todo, key ) => (< ListItem task={todo} key={key}  /> 
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos


})

const mapDispatchToProps = (dispatch) => ({
    loadAll: () => dispatch(fetchTodos())

})


export default connect(mapStateToProps, mapDispatchToProps) (TodoList);




//todolist == all the todos together to be able to get access to every single todo item we have to map through it 
//task is just a variable name for our prop
//{todos} prop passed to the ListItem component that contains every single todo so it can have access to the data from TodoList(bul todo) parent component
//todoform component so we can add our todo task