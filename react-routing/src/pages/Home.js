import { Link, Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  // Call useNavigate hook from react router dom to get a function reference.
  const navigate = useNavigate();

  /**
   * Use the function reference from useNavigate hook call to programatically navigate the user.
   * This code here is just for demonstration of the useNavigate hook functionality.
   */
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>Home Page.</h1>
      <p>
        Go to <Link to="/products">list of products.</Link>
      </p>

      <button onClick={navigateHandler}>Navigate to products</button>
    </>
  );
};

export default HomePage;
