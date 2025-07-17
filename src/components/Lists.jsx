import React from 'react'
import { FaTrash } from 'react-icons/fa';
import './Lists.css';
const Lists = (props) => {
    const deleteHandler = () => {
        props.delete(props.index)
    }
    let color;
    if(props.amount<0){
       color=true;
    }
    else{
        color = false;
    }
  return (
    <ul>
        
        <li className={(color)?"red":"green"}>
            <span className='desc'>{props.item}</span>
            <span className='num'>{props.amount}</span>
            <span onClick={deleteHandler}><FaTrash/></span>
        </li>
    </ul>
  )
}

export default Lists
