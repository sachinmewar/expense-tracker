import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const App = () => {
  const expenses = [
    {title: 'laptop',amount: 44000, date: new Date()},
    
    {title: 'mouse', amount: 800, date: new Date()},
    
    {title: 'keyboard', amount: 1400, date: new Date()},

    {title: 'printer', amount: 6500, date: new Date()}
];
  return(
    <div>
      <NewExpense />  
      <Expenses expense={expenses}/>
    </div>
  );
}
export default App;