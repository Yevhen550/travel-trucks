import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <NavLink to="/" className={s.navLogo}>
          <svg width="132" height="16">
            <use href="/src/public/icons/sprite.svg#logo"></use>
          </svg>
        </NavLink>
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
