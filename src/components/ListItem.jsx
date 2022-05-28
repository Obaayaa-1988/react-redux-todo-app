import React from "react";
import  styled  from 'styled-components';
import  { css } from 'styled-components';


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

const BtnContainer = styled.div `
display: flex;
gap: 1rem
`
const Button = styled.button`
padding: 11px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
${props => props.completed && css `
background-color: blueviolet;
color: white;

`}

${props => props.delete && css `
background-color: red;
color: white;

`}

`


const ListItem = ({ task }) => {
    return(
        <div className="item-container">
            <Wrapper>
            <h3 >{task.text}</h3>
            <BtnContainer>
            <Button completed>Change To Completed</Button>
            <Button delete>Delete</Button>
            </BtnContainer>
            </Wrapper>

        </div>
    )
}

export default ListItem;

//a single todo item can be deleted singly and pending task turn to completed