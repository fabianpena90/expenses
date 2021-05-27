import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({ onSaveData }) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    onSaveData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2020-01-01'
            step='2022-01-01'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
