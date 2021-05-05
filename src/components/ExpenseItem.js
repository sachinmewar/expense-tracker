import './ExpenseItem.css'

const ExpenseItem = (props) => {
   const expenseDate = props.date;
   const title = props.title;
   const amount = props.amount;
   return(
      <div className="expense-item"> 
         <div>
             {expenseDate.toISOString()} 
         </div>

         <div>
         <h2 className="expense-item__description">
            {title} 
         </h2>
         
         </div>

         <div className= "expense-item__price">
            {amount}
         </div>
      </div>
   );
}

export default ExpenseItem;