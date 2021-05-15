import Visualization from "./Visualization";
import { useState } from 'react';
const ShowVisualization = ({ data }) => {
   const [buttonState, setButtonState] = useState(false);

   const setChartShownHandler = () => {
      const textId = document.getElementById('expense-d3chart-button__text');
      const textContent = textId.textContent;
      textContent === "Show Chart with D3 Visualization" ?
         textId.innerHTML = "Hide Chart with D3 Visualization" :
         textId.innerHTML = "Show Chart with D3 Visualization"
      setButtonState(
         buttonState === true ? false : true
      );
   };
   return (
      <div>
         <button className="expense-d3chart__button" onClick={setChartShownHandler}>
            <p id="expense-d3chart-button__text" >Show Chart with D3 Visualization</p>
         </button>
         { buttonState &&
            <Visualization data={data} />
         }
      </div>
   );
};

export default ShowVisualization;