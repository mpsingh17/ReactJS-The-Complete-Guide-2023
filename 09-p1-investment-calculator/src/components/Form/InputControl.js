const InputControl = (props) => {
  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
      <input
        type={props.inputType}
        id={props.inputId}
        value={props.value}
        onChange={props.onChange}
      />
    </p>
  );
};

export default InputControl;
