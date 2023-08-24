const InputControl = (props) => {
  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
      <input
        type={props.inputType}
        id={props.inputId}
        onChange={props.onChange}
      />
    </p>
  );
};

export default InputControl;
