import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import SwitchTheme from './components/Theme/SwitchTheme';

const dummy_expenses = [
  { id: '1', title: 'laptop', amount: 42000, date: new Date(2021, 8, 8) },

  { id: '2', title: 'mouse', amount: 1800, date: new Date(2021, 5, 9) },

  { id: '3', title: 'keyboard', amount: 2400, date: new Date(2021, 11, 28) },

  { id: '4', title: 'printer', amount: 12500, date: new Date(2020, 9, 12) },

  { id: '5', title: 'Book 1', amount: 400, date: new Date(2020, 1, 18) },

  { id: '6', title: 'Mouse Pad', amount: 1250, date: new Date(2020, 3, 22) }
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
      <span>
        <SwitchTheme />
      </span>
      <div>
        <NewExpense addNewExpense={addNewExpenseHandler} />
        <Expenses expense={newExpense} />
      </div>

    </div>
  );
}
export default App;