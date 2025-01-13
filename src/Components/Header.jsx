import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Dogs from "../Assets/dogs.svg?react"
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);


  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={`${styles.logo}`}>
          <Dogs />
        </Link>
        {data && data.email}
        <Link to="/login" className={`${styles.login}`}>
          {data ? data.username : "Login / Criar"}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
