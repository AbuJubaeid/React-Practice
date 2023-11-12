import React, { useState } from 'react';
import Card from '../UI/card.js';
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter.js';

function Expenses (props){
  const [filteredYear, setFilteredYear] = useState('');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }
    return (
        <Card className="expenses">
             <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          {props.items.map((expense) => (
          <ExpenseItem 
            key={expense.id}
            title={expense.title} 
            price={expense.price} 
           date={expense.date}/>))}
    </Card>
    )
}
export default Expenses
