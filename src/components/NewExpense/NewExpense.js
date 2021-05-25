import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = () => {
  const formData = (enteredData) => {
    const newFormData = {
      ...enteredData,
      id: Math.random().toString(),
    }
    console.log(newFormData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={formData} />
    </div>
  )
}

export default NewExpense
