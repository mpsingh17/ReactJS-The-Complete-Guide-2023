import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>

          {/*
            This Link component is simulating a 404 error.
            No component available for /products/dd
            The ErrorPage component should load for this link.
          */}
          <li>
            <Link to="/products/dd">Not Available</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
