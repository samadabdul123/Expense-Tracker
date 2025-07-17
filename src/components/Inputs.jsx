import React, { useState } from 'react'
import './Inputs.css';

const Inputs = (props) => {
    const [expenses, setExpenses] = useState({expense:'',amount:''})

    const changeHandler = (e) => {
         setExpenses({...expenses,[e.target.name]:e.target.value})
    }
    const submitHandler =()=>{
         props.addList(expenses)
         setExpenses({expense:'',amount:''})
    }
  return (
    <div className='input'>
      <div className="exp">
      <label>Expense:</label>
      <input type="text" 
      placeholder='Enter a Expense'
      value={expenses.expense} 
      name='expense'
      onChange={changeHandler}/>
      </div>
      <div className="amo">
      <label>Amount:</label>
      <input type="number" 
      placeholder='Enter a amount'
      value={expenses.amount} 
      name='amount'
      onChange={changeHandler}/>
      </div>
      <button onClick={submitHandler}>Add Tracker</button>
    </div>
  )
}

export default Inputs
