import React, { useState } from 'react'
import Inputs from './components/Inputs'
import Lists from './components/Lists'
import Calculation from './components/Calculation'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addList = (expenses) => {
    if(expenses.expense!=='' || expenses.amount!==''){
    setTasks([...tasks,expenses])
    }
    else{
      alert("Please Enter a valid number")
    }
  }
  const deleteitem = (indextodelete) =>{
    setTasks(prev => prev.filter((__,i) => i!== indextodelete ))
  }
  let positive = tasks.filter(e=>Number(e.amount)>0)
  let income =  positive.reduce((sum,e)=>sum+Number(e.amount),0)
  let negative = tasks.filter(e=>Number(e.amount)<0)
  let expense = Math.abs(negative.reduce((sum,e)=>sum+Number(e.amount),0))
  let Balance = (income-expense);
  return (
    <>
      <h1 className='heading'>Expense Tracker</h1>
      <div className="Container">
        <div className="left">
        <Calculation Balance={Balance} Income={income} Expense={expense}/>
        <Inputs addList={addList}/>
        </div>
        <div className="history">
          <h2>Transaction History</h2>
        {tasks.map((expenses,i)=>(
          <Lists key={i} index={i} item={expenses.expense} amount={expenses.amount} delete={deleteitem}/>
        ))}
        </div>
        {/* <p>Income:{income}</p>
        <p>Expense:{expense}</p>
        <p>Balance:{Balance}</p> */}
      </div>
    </>
  )
}

export default App
