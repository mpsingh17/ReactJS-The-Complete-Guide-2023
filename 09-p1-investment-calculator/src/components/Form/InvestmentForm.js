import InputControl from "./InputControl";
import { useState } from "react";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState(100);
  const [yearlyContribution, setYearlyContribution] = useState(4);
  const [expectedReturn, setExpectedReturn] = useState(2);
  const [duration, setDuration] = useState(12);

  //---------------- Event handlers -----------------------//
  const onCurrentSavingsChangeHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const onYearlyContributionChangeHandler = (event) => {
    setYearlyContribution(event.target.value);
  };

  const onExpectedReturnChangeHandler = (event) => {
    setExpectedReturn(event.target.value);
  };

  const onDurationChangeHandler = (event) => {
    setDuration(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };

    props.calculateHandler(userInput);
  };

  return (
    <form className="form" onSubmit={onFormSubmitHandler}>
      <div className="input-group">
        <InputControl
          htmlFor="current-savings"
          labelText="Current Savings ($)"
          inputType="number"
          inputId="current-savings"
          onChange={onCurrentSavingsChangeHandler}
        />
        <InputControl
          htmlFor="yearly-contribution"
          labelText="Yearly Contribution ($)"
          inputType="number"
          inputId="yearly-contribution"
          onChange={onYearlyContributionChangeHandler}
        />
      </div>
      <div className="input-group">
        <InputControl
          htmlFor="expected-return"
          labelText="Expected Return (%, per year)"
          inputType="number"
          inputId="expected-return"
          onChange={onExpectedReturnChangeHandler}
        />

        <InputControl
          htmlFor="duration"
          labelText="Investment Duration (years)"
          inputType="number"
          inputId="duration"
          onChange={onDurationChangeHandler}
        />
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentForm;
