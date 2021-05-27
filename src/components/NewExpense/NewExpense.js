import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ addOnExpenses }) => {
  const formData = (enteredData) => {
    const newFormData = {
      ...enteredData,
      id: Math.random().toString(),
    }
    addOnExpenses(newFormData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveData={formData} />
    </div>
  )
}

export default NewExpense
