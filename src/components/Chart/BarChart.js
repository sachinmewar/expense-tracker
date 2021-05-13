
import './BarChart.css'

const BarChart = ({ value, maxValue, label }) => {
   let barFillHeight = '0%';

   if (maxValue > 0)
      barFillHeight = Math.round((value / maxValue) * 100) + '%';
   return (
      <div className='bar-chart'>
         <div className='bar-chart__inner'>
            <div className='bar-chart__fill' style={{ height: barFillHeight }}> </div>
            <div className='bar-chart__label'> {label} </div>
         </div>
      </div>
   );
};

export default BarChart;