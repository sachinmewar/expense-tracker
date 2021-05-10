import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

   const onClickExpenseFilterHandler = (event) => {
      props.getExpenseFilterValue(event.target.value);
   };
   return (
      <div className='expense-filter-container'>
         <div className='expense-filter'>
            <label> Filter by Year: </label>
            <select value={props.value} onChange={onClickExpenseFilterHandler}>
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