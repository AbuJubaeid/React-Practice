import Expenses from './components/Expenses/Expenses.js';

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
    <Expenses items={expenses}/>
  );
}

export default App;
