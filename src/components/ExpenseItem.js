import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
   return(
      <div className="expense-item"> 
         <div>
            <ExpenseDate date = {props.date} />
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