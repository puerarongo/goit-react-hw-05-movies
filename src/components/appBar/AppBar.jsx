import Navigation from "components/navigation/Navigation";
import styles from "./AppBar.module.css";

const AppBar = () => {
    return (
        <header className={styles.header}>
            <Navigation />
        </header>
    );
};

export default AppBar;