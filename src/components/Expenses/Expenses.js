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
            expenses.map((item) => {
               return (
                  <ExpenseItem
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