import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList'

const Expenses = (props) => {
   const expenses = props.expense;

   const [filteredYear, setfilteredYear] = useState('2021');
   const getExpenseFilterValueHandler = (expenseFilterValue) => {
      setfilteredYear(expenseFilterValue);
   }

   const filteredExpenses = expenses.filter((item) => {
      return item.date.getFullYear().toString() === filteredYear;
   });

   return (
      <div className="expenses">
         <ExpenseFilter value={filteredYear} getExpenseFilterValue={getExpenseFilterValueHandler} />
         <ExpenseList item={filteredExpenses} />
      </div>
   );
}
export default Expenses;