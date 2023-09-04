import "./Modal.css";

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onModalCloseHandler}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal header</h4>
        </div>

        <div className="modal-body">
          <ul>
            {props.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="modal-footer">
          <button
            className="button"
            type="button"
            onClick={props.onModalCloseHandler}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
