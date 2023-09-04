import { useState } from "react";
import Modal from "../UI/Modal/Modal";

const initialUser = {
  id: Math.random(),
  userName: "",
  userAge: "",
};

const validateFormInputs = (userDetails) => {
  const formValidationResult = {
    isValid: true,
    errors: [],
  };

  if (
    userDetails.userName === null ||
    userDetails.userName === undefined ||
    userDetails.userName === ""
  ) {
    formValidationResult.isValid = false;
    formValidationResult.errors.push("User name is required.");
  }

  if (userDetails.userAge === null || userDetails.userAge === undefined) {
    formValidationResult.isValid = false;
    formValidationResult.errors.push("User age is required.");
  }

  if (+userDetails.userAge <= 0) {
    formValidationResult.isValid = false;
    formValidationResult.errors.push("User age must be greater than 0.");
  }

  return formValidationResult;
};

const AddUser = (props) => {
  const [userDetails, setUserDetails] = useState(initialUser);
  const [isValidForm, setIsValidForm] = useState(true);
  const [formErrors, setFormErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const onModalCloseHandler = () => {
    setShowModal(false);
  };

  const onInputChangeHandler = (inputId, value) => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [inputId]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const result = validateFormInputs(userDetails);

    if (!result.isValid) {
      setIsValidForm(false);
      setFormErrors(result.errors);
      setShowModal(true);
    } else {
      setUserDetails(initialUser);
      props.onAddUserHandler(event, userDetails);
    }
  };

  return (
    <>
      <h1>Add User</h1>

      <form onSubmit={onSubmitHandler}>
        <label>User Name</label>
        <input
          type="text"
          value={userDetails.userName}
          onChange={(event) =>
            onInputChangeHandler("userName", event.target.value)
          }
        />

        <label>User Age</label>
        <input
          type="number"
          value={userDetails.userAge}
          onChange={(event) =>
            onInputChangeHandler("userAge", event.target.value)
          }
        />

        <div>
          <button type="submit">Add User</button>
        </div>

        {/* {!isValidForm && formErrors.map((error) => <p>{error}</p>)} */}
        {!isValidForm && (
          <Modal
            items={formErrors}
            showModal={showModal}
            onModalCloseHandler={onModalCloseHandler}
          />
        )}
      </form>
    </>
  );
};

export default AddUser;
