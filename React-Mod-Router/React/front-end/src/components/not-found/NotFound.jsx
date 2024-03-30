import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export function NotFound() {
    return (
        <div className={styles["error-page"]}>
            <h2>Strona nieznaleziona!</h2>
            <p>Wpisano niepoprawny adres URL!</p>
            <Link to="/">Wróć</Link>
        </div>
    );
}
