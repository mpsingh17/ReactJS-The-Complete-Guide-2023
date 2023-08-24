import InputControl from "./InputControl";

const InvestmentForm = () => {
  return (
    <form className="form">
      <div className="input-group">
        <InputControl
          htmlFor="current-savings"
          labelText="Current Savings ($)"
          inputType="number"
          inputId="current-savings"
        />
        <InputControl
          htmlFor="yearly-contribution"
          labelText="Yearly Savings ($)"
          inputType="number"
          inputId="yearly-contribution"
        />
      </div>
      <div className="input-group">
        <InputControl
          htmlFor="expected-return"
          labelText="Expected Interest (%, per year)"
          inputType="number"
          inputId="expected-return"
        />

        <InputControl
          htmlFor="duration"
          labelText="Investment Duration (years)"
          inputType="number"
          inputId="duration"
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
