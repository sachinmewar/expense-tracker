import './ExpenseFilter.css';

const ExpenseFilter = ({ value, getExpenseFilterValue }) => {

   const onClickExpenseFilterHandler = (event) => {
      getExpenseFilterValue(event.target.value);
   };
   return (
      <div className='expense-filter-container'>
         <div className='expense-filter'>
            <label> Filter by Year: </label>
            <select value={value} onChange={onClickExpenseFilterHandler}>
               <option value='2020'> 2020 </option>
               <option value='2021'> 2021 </option>
               <option value='2022'> 2022 </option>
               <option value='2023'> 2023 </option>
            </select>
         </div>
      </div>
   );
};

export default ExpenseFilter;