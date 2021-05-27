import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const items = [
    {
      title: 'Car Insurance',
      amount: 294.0,
      date: new Date(2021, 5, 23),
    },
    {
      title: 'Health Insurance',
      amount: 296.0,
      date: new Date(2021, 8, 2),
    },
    {
      title: 'Computer',
      amount: 1200.0,
      date: new Date(2021, 1, 12),
    },
    {
      title: 'DayCare',
      amount: 300.0,
      date: new Date(2021, 0, 1),
    },
  ]

  const addExpenses = (expense) => {
    console.log('App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense addOnExpenses={addExpenses} />
      <Expenses items={items} />
    </div>
  )
}

export default App
