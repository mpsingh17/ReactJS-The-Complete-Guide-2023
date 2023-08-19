import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onExpenseFormSubmitHandler = (submittedExpenseData) => {
    const expenseData = {
      ...submittedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseFormSubmit={onExpenseFormSubmitHandler} />
    </div>
  );
};

export default NewExpense;
