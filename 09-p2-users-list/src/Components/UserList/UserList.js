import User from "./User/User";

const UserList = (props) => {
  return (
    <>
      {props.userList.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
};

export default UserList;
