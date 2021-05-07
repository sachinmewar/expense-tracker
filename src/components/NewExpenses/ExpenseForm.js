import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // This event was automatically passed by form button.
  //Everytime we click on button inside the form the page reloads. Removing this defaut feature.
  const clickButtonHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label> Title </label>
          <input type="text" />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2020-01-01' max='2025-12-31' />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='submit' onClick={clickButtonHandler}>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;