import React from "react";
import styled from 'styled-components';
import { css } from 'styled-components';
import { useEffect } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../store/actions/action";
// import { useDispatch } from "react-redux";
import { statusTodo } from "../store/actions/action";
import { fetchTodos, testingThunk } from "../store/thunk/thunk";
import { clearTodo } from "../store/thunk/thunk";
import { updateTodo } from "../store/thunk/thunk";


const Wrapper = styled.div`
border-radius: 8px;
box-shadow: 0 5px 8px grey;
position: relative;
padding: 6px;
display: flex;
margin-left:  11rem;
margin-bottom: 2rem;

align-items: center;
justify-content: space-between;
width: 71%;
`

const BtnContainer = styled.div`
display: flex;
gap: 1rem
`
const Button = styled.button`
padding: 11px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
${props => props.completed && css`
background-color: blueviolet;
color: white;

`}

${props => props.delete && css`
background-color: red;
color: white;

`}

`


const ListItem = ({ task, removeTodo, changeTodo }) => {
    // useEffect(() => {
    //     removeTodo()

    // }, [removeTodo])




    return (
        <div className="item-container">

            <Wrapper>
                <h3 >{task.text}</h3>
                <BtnContainer>
                    {
                        task.isCompleted ? <Button completed onClick={() => { changeTodo(task.id) }}>done

                        </Button> : (
                            <Button completed onClick={() => { changeTodo(task.id) }}>pending</Button>


                        )}

                    <Button delete onClick={() => { removeTodo(task.id) }}>Delete</Button>

                    {/* <Button delete onClick={() => { removeTodo(task.text) }}>Delete</Button> */}
                    {/* <Button delete onClick={() => { removeTodo()}}>Delete</Button> */}

                </BtnContainer>
            </Wrapper>

        </div>
    )
}




const mapDispatchToProps = (dispatch) => ({
    // removeTodo: (text) => dispatch(deleteTodo(text)),
    removeTodo: (id) => dispatch(clearTodo(id)),


    changeTodo: (id) => dispatch(updateTodo(id))



})

export default connect(null, mapDispatchToProps)(ListItem);




//a single todo item can be deleted singly and pending task turn to completed