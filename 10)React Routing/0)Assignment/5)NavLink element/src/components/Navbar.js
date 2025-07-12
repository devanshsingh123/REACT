import { Link, NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
          onClick={() => window.location.replace("/")}
        />

        <nav>
          {/* use NavLink inplace of Link to set the style to the active links */}
          <NavLink to="/"
         className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >Home</NavLink>
          <NavLink to="/list"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >List</NavLink>
          <NavLink to="/contact"
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >Contact</NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
