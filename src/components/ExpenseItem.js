import './ExpenseItem.css'

const ExpenseItem = () => {
   return(
      <div className="expense-item"> 
         <div>
             May 5 2021 
         </div>

         <div>
         <h2 className="expense-item__description"> 
         Car Insurance 
         </h2>
         
         </div>

         <div className= "expense-item__price"> 
         5000 
         </div>
      </div>
   );
}

export default ExpenseItem;