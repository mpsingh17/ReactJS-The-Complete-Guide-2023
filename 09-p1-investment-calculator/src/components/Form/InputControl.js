const InputControl = (props) => {
  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.labelText}</label>
      <input type={props.inputType} id={props.inputId} />
    </p>
  );
};

export default InputControl;
