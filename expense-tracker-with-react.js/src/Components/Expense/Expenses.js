import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("all");

  const filteredExpenses =
    selectedYear !== "all"
      ? props.expenses.filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        )
      : props.expenses;

  const getSelectedYearHandler = (selectedYear) => {
    // console.log(selectedYear);
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        getSelectedYear={getSelectedYearHandler}
      />

      <ExpenseChart expenses={filteredExpenses} />

      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
