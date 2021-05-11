import { useState } from 'react';
import './ExpenseFilter.css';

const filterAmount = [
   { id: '1', label: 'Below-500', value: { minVal: 0, maxVal: 499 } },
   { id: '2', label: '500-999', value: { minVal: 500, maxVal: 999 } },
   { id: '3', label: '1000-1499', value: { minVal: 1000, maxVal: 1499 } },
   { id: '4', label: '1500-1999', value: { minVal: 1500, maxVal: 1999 } },
   { id: '5', label: '2000 and above', value: { minVal: 2000, maxVal: Number.MAX_VALUE } }
];

const filterYear = [
   { id: '1', label: '2020', value: '2020' },
   { id: '2', label: '2021', value: '2021' },
   { id: '3', label: '2022', value: '2022' },
   { id: '4', label: '2023', value: '2023' }
];

let currentYear = new Date().getFullYear().toString();
const DATE_FILTER = "date";
const PRICE_FILTER = "price";

const ExpenseFilter = ({ value, getExpenseFilterValue }) => {

   const [intialSelectedFilter, setFilter] = useState(DATE_FILTER);
   // setFilter(new Date().getFullYear().toString());

   const onClickFilterByAmountHandler = () => {
      setFilter(PRICE_FILTER);
   };
   const onClickFilterByDateHandler = () => {
      setFilter(DATE_FILTER);
   }
   const onClickExpenseFilterHandler = (event) => {
      getExpenseFilterValue([event.target.value, intialSelectedFilter]);

   };

   return (
      <div className='expense-filter-container'>
         <div className='expense-filter-toggle'>
            <div>
               <p> Filter by </p>
               <button onClick={onClickFilterByAmountHandler}> Amount </button>
               <button onClick={onClickFilterByDateHandler}> Year </button>
            </div>
         </div>
         { intialSelectedFilter === PRICE_FILTER &&
            <div className='expense-filter'>
               <label>Filtered by Amount: </label>
               <select value={value} onChange={onClickExpenseFilterHandler}>
                  {filterAmount.map(amount =>
                     <option key={amount.id} value={JSON.stringify(amount.value)}> {amount.label} </option>
                  )}
               </select>
            </div>
         }
         { intialSelectedFilter === DATE_FILTER &&
            <div className='expense-filter'>
               <label> Filter by Year: </label>
               <select
                  value={value}
                  onChange={onClickExpenseFilterHandler}
                  defaultValue={filterYear[1]}
               >
                  {filterYear.map(year =>
                     <option key={year.id} value={year.value}> {year.label} </option>
                  )}
               </select>
            </div>
         }
      </div>
   );
};

export default ExpenseFilter;