
import Bar from './Bar';

const Visualization = ({ data }) => {
   const sorted_data = data.sort(function (a, b) {
      return (a.amount - b.amount);
   });
   const lowestValues = sorted_data.slice(0, 5);
   const highestValues = sorted_data.slice(Math.max(sorted_data.length - 5, 0)).reverse();
   return (
      <div>
         <div>
            <Bar data={sorted_data} />
            <p> All Expenses </p>
         </div>
         <div>
            <Bar data={lowestValues} />
            <p> Lowest Five Expenses </p>
         </div>

         <div>
            <Bar data={highestValues} />
            <p> Top Five Expenses </p>
         </div>
      </div>
   );
};

export default Visualization;