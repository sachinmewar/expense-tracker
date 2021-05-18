import { useState } from 'react';
import Bar from './Bar';
import data from '../../Data/data';
import SelectVisualization from './SelectVisualization';

const Visualization = () => {
   const sorted_data = data.sort(function (a, b) {
      return (a.amount - b.amount);
   });
   const lowestValues = sorted_data.slice(0, 5);
   const highestValues = sorted_data.slice(Math.max(sorted_data.length - 5, 0)).reverse();

   const barChartData = [
      {
         'data': sorted_data,
         'chartWidth': 1400,
         'title': "All Expenses"
      },
      {
         'data': lowestValues,
         'chartWidth': 1000,
         'title': "Lowest 5 Expenses"
      },
      {
         'data': highestValues,
         'chartWidth': 1000,
         'title': "Highest 5 Expenses"
      },

   ]

   const [selectedValue, setSelectedValue] = useState(0);

   const getVisualisationSelectedItem = (value) => {
      setSelectedValue(value);
   };

   return (
      <div>
         <SelectVisualization visualisationSelectedItem={getVisualisationSelectedItem} />
         <div>
            <Bar data={barChartData[selectedValue].data} chartWidth={barChartData[selectedValue].chartWidth} title={barChartData[selectedValue].title} />
         </div>
         {
            /*
         <div>
            <Bar />
         </div>

         <div>
            <Bar />
         </div>
         */
         }
      </div>
   );
};

export default Visualization;