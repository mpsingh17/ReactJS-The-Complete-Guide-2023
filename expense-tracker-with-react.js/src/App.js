import "./App.css";
import ExpenseList from "./Components/Expense/ExpenseList";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 114.75,
      date: new Date(2022, 9, 5),
    },
    {
      id: "e2",
      title: "Grocery",
      amount: 112.25,
      date: new Date(2022, 9, 10),
    },
    {
      id: "e3",
      title: "Internet",
      amount: 110.75,
      date: new Date(2022, 9, 12),
    },
  ];

  const AddExpenseDataHandler = (submittedExpenseData) => {
    expenses.push(submittedExpenseData);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseDataHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
