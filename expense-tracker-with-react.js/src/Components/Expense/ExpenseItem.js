import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <p className="expense-item__price">${props.amount}</p>
      </div>
    </Card>
  );
};

export default ExpenseItem;
