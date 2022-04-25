import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/" exact="true" className={styles.nav__link}>Home</NavLink>
            <NavLink to="/movies" className={styles.nav__link}>Movies</NavLink>
            <hr />
        </nav>
    );
};

export default Navigation;