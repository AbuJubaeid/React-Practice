import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses.js';
import NewExpenses from './components/NewExpenses/NewExpenses.js';

const DUMMY_EXPENSES = [
  {title: 'Car Insurance',
  price: 290,
  date:  new Date(21,7,12)},

  {title: 'Book',
  price: 250,
  date:  new Date(21,6,12)},

  {title: 'Paper',
  price: 280,
  date: new Date(21,5,12)}
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
       <NewExpenses onAddExpense={addExpenseHandler}/>
       <Expenses items={expenses}/>
       
    </div>
  );
}

export default App;
