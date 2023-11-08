import ExpenseItem from './components/ExpenseItem.js';

function App() {
  const expenses = [
    {title: 'Car Insurance',
    price: 290,
    date:  new Date(21,7,12)},

    {title: 'Book',
    price: 250,
    date:  new Date(21,6,12)},

    {title: 'Paper',
    price: 280,
    date: new Date(21,5,12)}
  ]
  return (
    <div>
      <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date}/>
      <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date}/>
      <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date}/>
    </div>
  );
}

export default App;
