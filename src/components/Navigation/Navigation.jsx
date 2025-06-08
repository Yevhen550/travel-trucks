import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) => (isActive ? s.active : "");

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLink className={navLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
