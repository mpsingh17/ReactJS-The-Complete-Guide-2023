import { useState } from "react";
import "./App.css";
import AddUser from "./Components/Add User/AddUser";
import UserList from "./Components/UserList/UserList";

const initialUsersList = [];

function App() {
  const [userList, setUserList] = useState(initialUsersList);

  const onAddUserHandler = (event, userDetails) => {
    event.preventDefault();

    const userToAdd = { ...userDetails, id: Math.random() };

    setUserList((prevState) => {
      return [...prevState, userToAdd];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUserHandler={onAddUserHandler} />
      <p>{userList.length}</p>
      <UserList userList={userList} />
    </div>
  );
}

export default App;
