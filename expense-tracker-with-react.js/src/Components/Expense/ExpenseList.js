import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const ExpenseList = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  const getSelectedYearHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        getSelectedYear={getSelectedYearHandler}
      />

      {props.expenses.map((event) => (
        <ExpenseItem
          title={event.title}
          amount={event.amount}
          date={event.date}
        />
      ))}
    </Card>
  );
};

export default ExpenseList;
