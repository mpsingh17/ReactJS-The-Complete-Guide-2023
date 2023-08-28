import InputControl from "./InputControl";
import classes from "./InvestmentForm.module.css";
import { useState } from "react";

const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 500,
  "expected-return": 7,
  "duration-in-years": 12,
};

const InvestmentForm = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const [isFormValid, setIsFormValid] = useState(true);

  //---------------- Event handlers -----------------------//
  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  const onResetBtnClick = () => {
    setUserInput(initialUserInput);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    checkUserInputValidity(userInput);

    props.calculateHandler(userInput);
  };

  //---------------- Helper functions --------------------//
  const checkUserInputValidity = (userInput) => {
    for (const key in userInput) {
      if (userInput[key] === undefined || userInput[key] === null) {
        setIsFormValid(false);
        break;
      }
      setIsFormValid(true);
      // console.log(userInput);
    }
  };

  return (
    <form className={classes["form"]} onSubmit={onFormSubmitHandler}>
      <div className={classes["input-group"]}>
        <InputControl
          htmlFor="current-savings"
          labelText="Current Savings ($)"
          inputType="number"
          inputId="current-savings"
          value={userInput["current-savings"]}
          onChange={inputChangeHandler}
        />
        <InputControl
          htmlFor="yearly-contribution"
          labelText="Yearly Contribution ($)"
          inputType="number"
          inputId="yearly-contribution"
          value={userInput["yearly-contribution"]}
          onChange={inputChangeHandler}
        />
      </div>
      <div className={classes["input-group"]}>
        <InputControl
          htmlFor="expected-return"
          labelText="Expected Return (%, per year)"
          inputType="number"
          inputId="expected-return"
          value={userInput["expected-return"]}
          onChange={inputChangeHandler}
        />

        <InputControl
          htmlFor="duration"
          labelText="Investment Duration (years)"
          inputType="number"
          inputId="duration-in-years"
          value={userInput["duration-in-years"]}
          onChange={inputChangeHandler}
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
