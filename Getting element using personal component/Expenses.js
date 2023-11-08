import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

function Expenses (props){
    return (
        <div className="expenses">
      <ExpenseItem 
      title={props.items[0].title} 
      price={props.items[0].price} 
      date={props.items[0].date}/>

      <ExpenseItem 
      title={props.items[1].title} 
      price={props.items[1].price} 
      date={props.items[1].date}/>

      <ExpenseItem 
      title={props.items[2].title} 
      price={props.items[2].price} 
      date={props.items[2].date}/>
    </div>
    )
}
export default Expenses
