import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
   const [title, setTitle] = useState(props.title);
   const [date, setDate] = useState(props.date);
   const [amount, setAmount] = useState(props.amount);


   return (
      <div className="expense-item">
         <ExpenseDate date={date} />

         <div className="expense-item__description">
            <h2>{title}</h2>
         </div>

         <div className="expense-item__price">{amount}</div>
      </div>
   );
}

export default ExpenseItem;