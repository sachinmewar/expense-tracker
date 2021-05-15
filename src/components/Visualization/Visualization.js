
import Bar from './Bar';
import data from '../../Data/Data'

const Visualization = () => {
   const sorted_data = data.sort(function (a, b) {
      return (a.amount - b.amount);
   });
   const lowestValues = sorted_data.slice(0, 5);
   const highestValues = sorted_data.slice(Math.max(sorted_data.length - 5, 0)).reverse();
   return (
      <div>
         <div>
            <Bar data={sorted_data} chartWidth={1400} title="All Expenses" />
         </div>
         <div>
            <Bar data={lowestValues} chartWidth={1000} title="Lowest 5 Expenses" />
         </div>

         <div>
            <Bar data={highestValues} chartWidth={1000} title="Highest 5 Expenses" />
         </div>
      </div>
   );
};

export default Visualization;