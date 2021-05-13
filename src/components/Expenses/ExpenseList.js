import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
   const filteredExpenses = props.item;
   let expenseDisplay = <h2 className="expenses-list__heading"> No Expenses found. </h2>
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
      <div className="expense-list">
         {expenseDisplay}
      </div>
   );

};

export default ExpenseList;