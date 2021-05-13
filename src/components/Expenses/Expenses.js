import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
   const expenses = props.expense;

   const [filteredExpenses, setFilteredExpenses] = useState(expenses);



   const getExpenseFilterValueHandler = (expenseFilterValue) => {

      let toggleValue = expenseFilterValue[1];
      let filteredValue = expenseFilterValue[0]
      let filteredItems = []

      if (toggleValue === 'date') {

         filteredItems = expenses.filter((item) => {
            return item.date.getFullYear().toString() === filteredValue.toString();
         })
         setFilteredExpenses(filteredItems)

         console.log(filteredExpenses);
      }
      else {

         let obj = JSON.parse(filteredValue)
         filteredItems = expenses.filter((item) => {
            return item.amount >= obj.minVal && item.amount <= obj.maxVal;
         })
         setFilteredExpenses(filteredItems);
      }
   }

   return (
      <div className="expenses">
         <ExpenseFilter getExpenseFilterValue={getExpenseFilterValueHandler} />
         <ExpenseChart expenses={filteredExpenses} />
         <ExpenseList item={filteredExpenses} />
      </div>
   );
}
export default Expenses;