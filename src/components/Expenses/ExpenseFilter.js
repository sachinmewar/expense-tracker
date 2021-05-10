import { useState } from 'react';
import './ExpenseFilter.css';

const filterAmount = [
   { label: 'Below-500', value: 'Below-500' },
   { label: '500-999', value: '500-999' },
   { label: '1000-1499', value: '1000-1499' },
   { label: '1500-1999', value: '1500-1999' },
   { label: '2000 and above', value: '2000 and above' }
];

const filterYear = [
   { label: '2020', value: '2020' },
   { label: '2021', value: '2021' },
   { label: '2022', value: '2022' },
   { label: '2023', value: '2023' },
   { label: '2024', value: '2024' }
];
const ExpenseFilter = ({ value, getExpenseFilterValue }) => {

   const [toggleState, setToggleState] = useState();

   const onClickFilterByAmountHandler = () => {
      setToggleState(true);
   };
   const onClickFilterByDateHandler = () => {
      setToggleState(false);
   }
   const onClickExpenseFilterHandler = (event) => {
      getExpenseFilterValue([event.target.value, toggleState]);
   };

   return (
      <div className='expense-filter-container'>
         <div className='expense-filter-toggle'>
            <div>
               <p> Click to filter by amount </p>
               <button onClick={onClickFilterByAmountHandler}> Click </button>
            </div>
            <div>
               <p> Click to filter by date </p>
               <button onClick={onClickFilterByDateHandler}> Click </button>
            </div>
         </div>
         <div className='expense-filter'>
            <label>Filtered by Amount </label>
            <select>
               {filterAmount.map(amount =>
                  <option value={amount.value}> {amount.label} </option>
               )}
            </select>
         </div>
         <div className='expense-filter'>
            <label> Filter by Year: </label>
            <select value={value} onChange={onClickExpenseFilterHandler}>
               {filterYear.map(year =>
                  <option value={year.value}> {year.label} </option>
               )}
            </select>
         </div>
      </div>
   );
};

export default ExpenseFilter;