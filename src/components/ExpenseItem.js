import './ExpenseItem.css'

const ExpenseItem = (props) => {
   const month = props.date.toLocaleString(
      'en-US', {month: 'long'});
   const day = props.date.toLocaleString(
      'en-US', {day: '2-digit'}
   );
   const  year= props.date.getFullYear();
   return(
      <div className="expense-item"> 
         <div>
             <div>{month}</div>
             <div>{year}</div>
             <div>{day}</div>
         </div>

         <div>
         <h2 className="expense-item__description">
            {props.title} 
         </h2>
         
         </div>

         <div className= "expense-item__price">
            {props.amount}
         </div>
      </div>
   );
}

export default ExpenseItem;