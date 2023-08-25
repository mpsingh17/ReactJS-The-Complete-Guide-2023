import InputControl from "./InputControl";
import classes from "./InvestmentForm.module.css";
import { useState } from "react";

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState();
  const [yearlyContribution, setYearlyContribution] = useState();
  const [expectedReturn, setExpectedReturn] = useState();
  const [duration, setDuration] = useState();
  const [isFormValid, setIsFormValid] = useState(true);

  //---------------- Helper functions --------------------//
  const checkUserInputValidity = (userInput) => {
    for (const key in userInput) {
      if (userInput[key] === undefined || userInput[key] === null) {
        setIsFormValid(false);
        break;
      }
      setIsFormValid(true);
      console.log(userInput);
    }
  };

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

  const onResetBtnClick = () => {
    setCurrentSavings(null);
    setYearlyContribution(null);
    setExpectedReturn(null);
    setDuration(null);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      currentSavings: currentSavings,
      yearlyContribution: yearlyContribution,
      expectedReturn: expectedReturn,
      duration: duration,
    };

    checkUserInputValidity(userInput);

    props.calculateHandler(userInput);
  };

  return (
    <form className={classes["form"]} onSubmit={onFormSubmitHandler}>
      <div className={classes["input-group"]}>
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
      <div className={classes["input-group"]}>
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
      <p className={classes["actions"]}>
        <button
          type="reset"
          className={classes["buttonAlt"]}
          onClick={onResetBtnClick}
        >
          Reset
        </button>
        <button type="submit" className={classes["button"]}>
          Calculate
        </button>
      </p>
      {!isFormValid && (
        <p style={{ textAlign: "center", color: "red" }}>
          All input fields are required.
        </p>
      )}
    </form>
  );
};

export default InvestmentForm;
