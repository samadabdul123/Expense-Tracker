import React from 'react'
import './Calculation.css';

const Calculation = (props) => {
  return (
   <div className="calc">
    <div className="balance">
        <p>Balance: {props.Balance}</p>
    </div>
    <div className="expense">
        <p className='para'>Income: {props.Income}</p>
        <p className='para'>Expense: {props.Expense}</p>
    </div>
   </div>
  )
}

export default Calculation
