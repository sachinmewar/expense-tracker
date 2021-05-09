import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
   const expenses = props.expense;

   const [filteredYear, setfilteredYear] = useState('2021');
   const getExpenseFilterValueHandler = (expenseFilterValue) => {
      setfilteredYear(expenseFilterValue);
   }

   return (
      <div className="expenses">
         <ExpenseFilter value={filteredYear} getExpenseFilterValue={getExpenseFilterValueHandler} />
         {
            // Added key so that the react can distinguish between different div tags and will not update 
            // all items and the whole array
            expenses.map((item) => {
               return (
                  <ExpenseItem
                     key={item.id}
                     title={item.title}
                     date={item.date}
                     amount={item.amount}
                  />
               )
            })
         }

      </div>
   );
}

export default Expenses;