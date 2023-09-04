import { useState } from "react";

const initialUser = {
  id: Math.random(),
  userName: "",
  userAge: "",
};

const AddUser = (props) => {
  const [userDetails, setUserDetails] = useState(initialUser);

  const onInputChangeHandler = (inputId, value) => {
    setUserDetails((prevState) => {
      return {
        ...prevState,
        [inputId]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    setUserDetails(initialUser);
    props.onAddUserHandler(event, userDetails);
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
      </form>
    </>
  );
};

export default AddUser;
