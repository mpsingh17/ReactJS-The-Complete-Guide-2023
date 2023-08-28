import InvestmentForm from "./components/Form/InvestmentForm";
import InvestmentTable from "./components/Table/InvestmentTable";
import Header from "./components/Header/Header";
import classes from "./app.module.css";
import { useState } from "react";

function App() {
  const [investmentData, setInvestmentData] = useState([]);

  const convertToMoneyFormat = (moneyValue) => {
    return moneyValue.toLocaleString("en-NZ", {
      currency: "NZD",
      style: "currency",
    });
  };

  const calculateHandler = (userInput) => {
    // console.log(userInput);

    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    let totalYearlyInterest = 0;
    let investedCapital = 0;

    const duration = +userInput["duration-in-years"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = (+userInput["expected-return"] / 100).toFixed(2);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;

      totalYearlyInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital = currentSavings - totalYearlyInterest;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: convertToMoneyFormat(yearlyInterest),
        totalYearlyInterest: convertToMoneyFormat(totalYearlyInterest),
        currentSavings: convertToMoneyFormat(currentSavings),
        yearlyContribution: convertToMoneyFormat(yearlyContribution),
        investedCapital: convertToMoneyFormat(investedCapital),
      });
    }

    // console.log(yearlyData);
    setInvestmentData(yearlyData);
  };

  return (
    <div>
      <Header />
      <InvestmentForm calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {investmentData.length > 0 ? (
        <InvestmentTable investmentData={investmentData} />
      ) : (
        <p className={classes["text-center"]}>No data available</p>
      )}
    </div>
  );
}

export default App;
