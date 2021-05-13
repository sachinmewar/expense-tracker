
import './Chart.css';
import BarChart from './BarChart';

const Chart = ({ dataPoints }) => {
   // map function will return array of values which will be used by Math.max
   const dataPointsValue = dataPoints.map(point => point.value);
   const maximumValue = Math.max(...dataPointsValue);

   return (
      <div className="chart">
         {dataPoints.map(dataPoint => (
            <BarChart
               key={dataPoint.label}
               value={dataPoint.value}
               maxValue={maximumValue}
               label={dataPoint.label}
            />
         ))};
      </div>
   );
};

export default Chart;