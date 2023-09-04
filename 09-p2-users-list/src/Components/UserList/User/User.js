const User = (props) => {
  return (
    <div>
      <h2>{props.user.userName}</h2>
      <p>{props.user.userAge}</p>
    </div>
  );
};

export default User;
