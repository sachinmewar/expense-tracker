import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

   const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString()
      };
      props.addNewExpense(expenseData);
   };

   const [isAddExpenseClicked, setIsAddExpenseClicked] = useState(false);
   const onClickExpenseButtonHandler = () => {
      setIsAddExpenseClicked(true);
   }

   const hideButtonHandler = () => {
      setIsAddExpenseClicked(false);
   };

   return (
      <div className='new-expense'>
         {isAddExpenseClicked && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} hideButton={hideButtonHandler} />}
         {!isAddExpenseClicked && <button type="submit" onClick={onClickExpenseButtonHandler}> Add New Expense </button>}
      </div >
   );
};

export default NewExpense;