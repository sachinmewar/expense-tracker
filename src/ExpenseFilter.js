

const ExpenseFilter = () => {
   return (
      <div>
         Filter by year
         <select>
            <option value='2020'> 2020 </option>
            <option value='2021'> 2021 </option>
            <option value='2022'> 2022 </option>
            <option value='2023'> 2023 </option>
         </select>
      </div>
   );
};

export default ExpenseFilter;