import styles from "./AddNewButton.module.css";

const AddNewButton = ({ children }) => (
    <button className={styles["add-new-button"]}>{children}</button>
);

export { AddNewButton };
