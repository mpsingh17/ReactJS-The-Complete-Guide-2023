import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              end={true}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              end={true}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>

          {/*
            This NavLink component is simulating a 404 error.
            No component available for /products/dd
            The ErrorPage component should load for this NavLink.
          */}
          <li>
            <NavLink
              to="products/dd"
              end={true}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Not Available
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
