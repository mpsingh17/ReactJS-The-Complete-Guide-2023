import logo from "./assets/investment-calculator-logo.png";
import InvestmentForm from "./components/Form/InvestmentForm";
import InvestmentTable from "./components/Table/InvestmentTable";
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
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    let totalYearlyInterest = 0;
    let investedCapital = 0;
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = (+userInput.expectedReturn / 100).toFixed(2);
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;

      totalYearlyInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital = currentSavings - totalYearlyInterest;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
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
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <InvestmentForm calculateHandler={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <InvestmentTable investmentData={investmentData} />
    </div>
  );
}

export default App;
