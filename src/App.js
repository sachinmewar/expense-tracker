import ExpenseItem from './components/ExpenseItem'

const App = () => {
  const expenses = [
    {title: 'laptop',amount: 44000, date: new Date()},
    
    {title: 'mouse', amount: 800, date: new Date()},
    
    {title: 'keyboard', amount: 1400, date: new Date()},

    {title: 'printer', amount: 6500, date: new Date()}
];
  return(
    <div>
      <div>Lets get Started!</div>
      <ExpenseItem 
      title= {expenses[0].title}
      date= {expenses[0].date}
      amount= {expenses[0].amount}
       />

       <ExpenseItem 
      title= {expenses[1].title}
      date= {expenses[1].date}
      amount= {expenses[1].amount}
       /> 

       <ExpenseItem 
      title= {expenses[2].title}
      date= {expenses[2].date}
      amount= {expenses[2].amount}
       /> 

       <ExpenseItem 
      title= {expenses[3].title}
      date= {expenses[3].date}
      amount= {expenses[3].amount}
       /> 

    </div>
  );
}
export default App;