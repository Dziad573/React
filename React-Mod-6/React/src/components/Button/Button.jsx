import styles from "./Button.module.css";

export function Button({ active, onClick, children }) {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${active ? styles.active : ""}`}
        >
            {children}
        </button>
    );
}
