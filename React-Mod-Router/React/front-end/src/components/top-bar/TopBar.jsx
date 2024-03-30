import styles from "./TopBar.module.css";

const TopBar = ({ children }) => (
    <div className={styles["top-bar"]}>{children}</div>
);

export { TopBar };
