import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import AddNewExpenseBtn from "./AddNewExpenseBtn";

const NewExpense = (props) => {
  const [formVisiblity, setFormVisiblity] = useState(false);
  const showForm = () => {
    setFormVisiblity(true);
  };

  const hideForm = () => {
    setFormVisiblity(false);
  };

  /**
   * Event handler functions.
   */
  const onExpenseFormSubmitHandler = (submittedExpenseData) => {
    const expenseData = {
      ...submittedExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {formVisiblity && (
        <ExpenseForm
          onExpenseFormSubmit={onExpenseFormSubmitHandler}
          hideForm={hideForm}
        />
      )}
      {!formVisiblity && <AddNewExpenseBtn showForm={showForm} />}
    </div>
  );
};

export default NewExpense;
