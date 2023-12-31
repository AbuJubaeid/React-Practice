import React, { useState } from 'react';
import Card from '../UI/card.js';
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () =>{
        setTitle('updated');
        console.log(title);
    };

    return (
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
} 
export default ExpenseItem