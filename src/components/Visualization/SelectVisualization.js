
import './SelectVisualization.css';

const SelectVisualization = ({ visualisationSelectedItem }) => {

   const onChangeHandler = (event) => {
      visualisationSelectedItem(event.target.value);
   };

   return (
      <div className='expenses-chart__container'>
         <p> Please select option to view graphs</p>
         <select onChange={onChangeHandler}>
            <option value='0'> All Expenses</option>
            <option value='1'> Lowest 5 Expenses</option>
            <option value='2'> Top 5 Expenses</option>
         </select>
      </div>
   )
};

export default SelectVisualization;