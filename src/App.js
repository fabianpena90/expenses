import Expenses from './components/Expenses'

function App() {
  const expenses = [
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
      title: 'Morgage',
      amount: 1200.0,
      date: new Date(2021, 1, 12),
    },
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
