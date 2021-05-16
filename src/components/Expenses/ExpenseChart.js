import Chart from '../Chart/Chart';
import { useState } from 'react';
import './ExpenseChart.css';
const ExpenseChart = ({ expenses }) => {

   const chartDataPoints = [
      { label: 'Jan', value: 0 },
      { label: 'Feb', value: 0 },
      { label: 'Mar', value: 0 },
      { label: 'Apr', value: 0 },
      { label: 'May', value: 0 },
      { label: 'Jun', value: 0 },
      { label: 'Jul', value: 0 },
      { label: 'Aug', value: 0 },
      { label: 'Sep', value: 0 },
      { label: 'Oct', value: 0 },
      { label: 'Nov', value: 0 },
      { label: 'Dec', value: 0 }
   ];
   const [chartShown, setChartShown] = useState(false);
   for (const expense of expenses) {
      let expenseMonth = expense.date.getMonth(); //Will return index Jan => 0
      chartDataPoints[expenseMonth].value += expense.amount;
   }
   const setChartShownHandler = () => {
      const textId = document.getElementById('expense-chart-button__text');
      const textContent = textId.textContent;
      console.log(textContent);
      textContent === "Show Chart" ? textId.innerHTML = "Hide Chart" : textId.innerHTML = "Show Chart"
      setChartShown(
         chartShown === true ? false : true
      );
   };
   return (
      <div>
         <div className="expense-chart-button__container">
            <button className="expense-chart__button" onClick={setChartShownHandler}>
               <p id="expense-chart-button__text" >Show Chart</p>
            </button>
         </div>
         { chartShown &&
            <Chart dataPoints={chartDataPoints} />
         }
      </div>
   );
};

export default ExpenseChart;