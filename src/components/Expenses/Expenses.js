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

   const filteredExpenses = expenses.filter((item) => {
      return item.date.getFullYear().toString() === filteredYear;
   });

   let expenseDisplay = <p> No Expenses found. </p>
   if (filteredExpenses.length > 0) {
      // Added key so that the react can distinguish between different div tags and will not update 
      // all items and the whole array
      expenseDisplay = filteredExpenses.map((item) => (
         <ExpenseItem
            key={item.id}
            title={item.title}
            date={item.date}
            amount={item.amount}
         />
      ))
   }

   return (
      <div className="expenses">
         <ExpenseFilter value={filteredYear} getExpenseFilterValue={getExpenseFilterValueHandler} />
         {expenseDisplay}
      </div>
   );
}

export default Expenses;