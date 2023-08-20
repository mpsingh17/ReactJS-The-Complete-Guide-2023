import "./App.css";
import ExpenseList from "./Components/Expense/ExpenseList";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 114.75,
    date: new Date(2019, 9, 5),
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseDataHandler = (submittedExpenseData) => {
    // DUMMY_EXPENSES.push(submittedExpenseData);
    // setExpenses(DUMMY_EXPENSES);

    setExpenses((prevExpenses) => {
      return [submittedExpenseData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={AddExpenseDataHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
