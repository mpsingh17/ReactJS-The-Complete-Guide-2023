import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const ExpenseList = (props) => {
  const [selectedYear, setSelectedYear] = useState("all");

  const getSelectedYearHandler = (selectedYear) => {
    // console.log(selectedYear);
    setSelectedYear(selectedYear);
  };

  const filteredExpenses =
    selectedYear !== "all"
      ? props.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        )
      : props.expenses;

  let expensesContent = <p className="text-white">No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        getSelectedYear={getSelectedYearHandler}
      />

      {expensesContent}
    </Card>
  );
};

export default ExpenseList;
