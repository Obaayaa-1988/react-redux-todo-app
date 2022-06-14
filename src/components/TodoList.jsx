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


const TodoList = ({ todos, loadAll, startedLoading }) => {
    console.log('loading girls',startedLoading)

    useEffect(() => {
        loadAll()

    }, [loadAll])

    const load = <h2 style={{textAlign: "center"}}>Loading Todos Here......</h2>


    const loadWrap = (
        <div className="">
            <TodoForm />

            { todos.map((todo, key ) => (< ListItem task={todo} key={key}  /> 
            ))}
        </div>
    );


    return startedLoading ? load : loadWrap

};

const mapStateToProps = (state) => ({
    todos: state.todos,
    startedLoading: state.loading


})

//loading coming fro

const mapDispatchToProps = (dispatch) => ({
    loadAll: () => dispatch(fetchTodos())

})


export default connect(mapStateToProps, mapDispatchToProps) (TodoList);




//todolist == all the todos together to be able to get access to every single todo item we have to map through it 
//task is just a variable name for our prop
//{todos} prop passed to the ListItem component that contains every single todo so it can have access to the data from TodoList(bul todo) parent component
//todoform component so we can add our todo task