const AddNewExpenseBtn = (props) => {
  const showAddExpenseFormHandler = () => {
    props.showForm();
  };

  return <button onClick={showAddExpenseFormHandler}>Add New Expense</button>;
};

export default AddNewExpenseBtn;
