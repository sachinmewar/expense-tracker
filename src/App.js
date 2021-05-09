import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const dummy_expenses = [
  { id: '1', title: 'laptop', amount: 44000, date: new Date() },

  { id: '2', title: 'mouse', amount: 800, date: new Date() },

  { id: '3', title: 'keyboard', amount: 1400, date: new Date() },

  { id: '4', title: 'printer', amount: 6500, date: new Date() }
];

const App = () => {

  const [newExpense, newExpenseHandler] = useState(dummy_expenses);
  const addNewExpenseHandler = addExpense => {
    // Here prevExpense is a default parameter in which prevState is returned
    // This will make sure that we get the updated state and not outdated state. 
    newExpenseHandler((prevExpense) => {
      return [addExpense, ...prevExpense];
    });
    //console.log(newExpense);
  }

  return (
    <div>
      <NewExpense addNewExpense={addNewExpenseHandler} />
      <Expenses expense={newExpense} />
    </div>
  );
}
export default App;