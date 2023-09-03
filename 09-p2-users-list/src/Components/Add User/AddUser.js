const AddUser = () => {
  return (
    <>
      <h1>Add User</h1>
      <form>
        <label>User Name</label>
        <input type="text" />
        <label>User Age</label>
        <input type="number" />
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </>
  );
};

export default AddUser;
