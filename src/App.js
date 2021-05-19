
import { useState, useContext } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import SwitchTheme from './components/Theme/SwitchTheme';
import ShowVisualization from './components/Visualization/ShowVisualization'
import { Route, Switch, Redirect } from 'react-router-dom';
import MainHeader from './components/Header/MainHeader'
import AuthContext from './components/store/auth-context';
import AuthPage from './components/Auth/AuthPage'
import Welcome from './pages/Welcome'
import UserProfile from './components/Profile/UserProfile'

const dummy_expenses = [
  { id: '1', title: 'laptop', amount: 42000, date: new Date(2021, 8, 8) },

  { id: '2', title: 'mouse', amount: 1800, date: new Date(2021, 5, 9) },

  { id: '3', title: 'keyboard', amount: 2400, date: new Date(2021, 11, 28) },

  { id: '4', title: 'printer', amount: 12500, date: new Date(2020, 9, 12) },

  { id: '5', title: 'Book 1', amount: 400, date: new Date(2020, 1, 18) },

  { id: '6', title: 'Mouse Pad', amount: 1250, date: new Date(2020, 3, 22) },

  { id: '7', title: 'Earphones', amount: 799, date: new Date(2021, 8, 8) },

  { id: '8', title: 'Study Table(Wooden)', amount: 15800, date: new Date(2021, 5, 9) },

  { id: '9', title: 'Chair', amount: 8700, date: new Date(2020, 11, 28) },

  { id: '10', title: 'Mobile', amount: 28500, date: new Date(2020, 12, 12) },

  { id: '11', title: 'React Book', amount: 1290, date: new Date(2021, 5, 11) },

  { id: '12', title: 'Computer Networking Book', amount: 850, date: new Date(2020, 1, 12) }
];


const App = () => {
  const authContext = useContext(AuthContext);

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
      <div>
        <MainHeader />
      </div>
      { authContext.isLoggedIn &&
        <span>
          <SwitchTheme />
        </span>
      }
      <Switch>
        {!authContext.isLoggedIn &&
          <Route path="/" exact>
            <Welcome />
          </Route>
        }
        {authContext.isLoggedIn &&
          <Route path="/expenses">
            <NewExpense addNewExpense={addNewExpenseHandler} />
            <Expenses expense={newExpense} />
          </Route>
        }
        {
          !authContext.isLoggedIn &&
          <Route path='/auth'>
            <AuthPage />
          </Route>
        }
        {
          authContext.isLoggedIn &&
          <Route path="/visualization">
            <ShowVisualization data={dummy_expenses} />
          </Route>
        }

        {
          authContext.isLoggedIn &&
          <Route path="/profile">
            <UserProfile />
          </Route>
        }

        {
          // If user enter invalid path or if user try to access page
          // without Authentication
        }

        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
  );
}
export default App;